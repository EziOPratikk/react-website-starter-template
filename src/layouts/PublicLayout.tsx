import { Fragment } from "react";

import { Outlet } from "react-router-dom";

import Navbar from "../shared/components/layouts/header/Navbar.tsx";
import Footer from "../shared/components/layouts/footer/Footer.tsx";

export default function PublicLayout() {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}
