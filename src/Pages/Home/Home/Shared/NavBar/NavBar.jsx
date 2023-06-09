import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../providers/AuthProvider/AuthProvider";
import logo from "/logo.svg";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        alert("Sign Out success");
      })
      .then((e) => {
        alert(e.massage);
      });
  };
  const navItem = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li tabIndex={0}>
        <Link className="justify-between">About</Link>
      </li>
      <li>
        <Link>Services</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-28 mb-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link to="/" className="">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      {user && <h2>{user?.email}</h2>}
      <div className="navbar-end">
        {user?.email ? (
          <a onClick={handleSignOut} className="btn">
            Sign Out
          </a>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
        <Link
          to={`/bookings`}
          className="btn btn-outline btn-ghost btn-primary ml-5"
        >
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
