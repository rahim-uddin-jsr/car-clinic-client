import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";
import NavBar from "../Pages/Home/Home/Shared/NavBar/NavBar";

const Main = () => {
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
