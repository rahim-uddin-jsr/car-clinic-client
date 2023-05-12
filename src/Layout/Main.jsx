import { useContext } from "react";
import { Facebook } from "react-content-loader";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";
import NavBar from "../Pages/Home/Home/Shared/NavBar/NavBar";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
const Main = () => {
  const { loader } = useContext(AuthContext);
  if (loader) {
    <Facebook></Facebook>;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Outlet />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
