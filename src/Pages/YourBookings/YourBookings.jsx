import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Banner from "../Home/Home/Shared/Banner/Banner";
import BookingsRow from "./BookingsRow";

const YourBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user.email]);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          alert("delete success");
        }
      });
    const remaining = bookings.filter((service) => service._id !== id);
    setBookings(remaining);
  };
  const handleStatus = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirmed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          const remaining = bookings.filter((service) => service._id !== id);
          const modified = bookings.find((service) => service._id === id);
          modified.status = "confirmed";
          setBookings([modified, ...remaining]);
        }
      });
  };
  console.log(bookings);
  return (
    <>
      <Banner>All Your Bookings</Banner>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((service) => (
              <BookingsRow
                key={service._id}
                service={service}
                handleDelete={handleDelete}
                handleStatus={handleStatus}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default YourBookings;
