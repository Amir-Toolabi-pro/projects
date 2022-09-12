import React from "react";
import { useSelector } from "react-redux";

import Allmain from "./Allmain";
import Footer from "./Footer";
import Header from "./Header";

const AllComponent = () => {
  const comlist = useSelector((state) => state);

  return (
    <>
      <section className={comlist ? "body" : ""}>
        <Header />
        <Allmain />
        <Footer />
      </section>
    </>
  );
};

export default AllComponent;
