import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Banner from "../Home/Home/Shared/Banner/Banner";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  console.log(service);
  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const requirement = form.requirement.value;
    const amount = form.amount.value;
    const date = form.date.value;
    const checkoutInfo = { name, email, date, requirement, amount };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(checkoutInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <Banner title={"Home/Checkout"}>{service.title}</Banner>
      <div className="hero min-h-screen">
        <div className="hero-content">
          <form
            onSubmit={handleCheckout}
            className="card shadow-2xl lg:w-[846px] lg:p-8 bg-base-200"
          >
            <div className="card-body">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="form-control">
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input p-[15px] input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    name="date"
                    required
                    type="date"
                    className="input p-[15px] input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    defaultValue={user?.email}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input p-[15px] input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    name="amount"
                    type=""
                    defaultValue={"$" + service.price}
                    placeholder="Due Amount"
                    className="input p-[15px] input-bordered"
                  />
                </div>
              </div>
              <div className="form-control mt-5">
                <textarea
                  name="requirement"
                  rows={20}
                  type="text"
                  placeholder="Any Requirements"
                  className="input  h-[240px] input-bordered p-6"
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Order Confirm
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
