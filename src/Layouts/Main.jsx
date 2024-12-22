import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Main = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      <div className="min-h-screen ">
      <Outlet />
      </div>
      <Footer></Footer>
    </div>
    );
};

export default Main;