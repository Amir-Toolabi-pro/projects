import React from "react";

import { useSelector } from "react-redux";

import Lists from "./Lists";
import About from "./About";

const Allmain = () => {
  const comlist = useSelector((state) => state);

  return (
    <>
      <div className="container">
        {comlist ? <Lists /> : null}

        <About />
      </div>
    </>
  );
};

export default Allmain;
