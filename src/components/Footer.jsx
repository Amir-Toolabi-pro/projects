import React from "react";

import insta from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import home from "../images/home.png";
import info from "../images/info.png";
import location from "../images/location.png";


const Footer = () => {
  return (
    <>
      <footer>
        <div className="aboutlink">
          <div>
            <a href="">
              <img src={linkedin} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={insta} alt="" />
            </a>
          </div>
        </div>
        <p>
          استفاده از مطالب وبسایت ورزشکار فقط برای مقاصد غیرتجاری و با ذکر منبع
          بلامانع است.تمامی حقوق این وبسایت برای شرکت دانش آوازه تندرست محفوظ
          می‌باشد.
        </p>
        <hr />
        <p>2022 — دانش آوازه تندرست | ورزشکار</p>
        <div className="risbuttons">
          <a href="#"><img src={home} alt="" /></a>
          <a href="#"><img src={location} alt="" /></a>
          <a href="#"><img src={info} alt="" /></a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

