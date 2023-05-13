import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import secure from "../../../assets/images/login/login.svg";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state.from.pathname || "/";
  const { loginWithEmail } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmail(email, password)
      .then((userCredential) => {
        alert("Signed in");
        const user = userCredential.user;
        console.log(user);
        navigate(from);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row justify-center w-full">
        <div className=" w-1/2">
          <img src={secure} alt="" />
        </div>
        <form
          onSubmit={handleLogin}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Sign In</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
              <p className="font-semibold my-5 text-center">
                New to Car Clinic?{" "}
                <Link to="/signup">
                  <span className="link">Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
