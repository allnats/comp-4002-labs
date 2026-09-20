import { Outlet } from "react-router";

import Navbar from "./Navbar";
import Footer from "../footer/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
