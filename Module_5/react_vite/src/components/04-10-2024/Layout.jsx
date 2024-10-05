import { Outlet } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      {/* DYNAMICALLY SWITCH THE CONTENT PART */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
