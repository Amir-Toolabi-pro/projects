import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { GolistAction } from "../REDUX/ComlistAction";

import aerobic from "../images/lists/aerobic.e98cf0a.png";
import barbell from "../images/lists/barbell.01cdc27.png";
import boxing from "../images/lists/boxing-gloves.d753cfd.png";
import desert from "../images/lists/desert.4be4dd5.png";
import dumbbell from "../images/lists/dumbbell.6cf9472.png";
import escape from "../images/lists/escape.28d3df9.png";
import field from "../images/lists/field.2135a6b.png";
import football from "../images/lists/football.985d323.png";
import gameing from "../images/lists/game.97ea76a.png";
import paragliding from "../images/lists/paragliding.29de4b4.png";
import pilates from "../images/lists/pilates.40a5888.png";
import swimming from "../images/lists/swimming-pool.e565a04.png";
import trx from "../images/lists/trx.dad3cea.png";
import yoga from "../images/lists/yoga.0296099.png";
import more from "../images/lists/more.png";

const Lists = () => {
  const comlist = useSelector((state) => state);
  const dispatch = useDispatch();

  const styleMode = {
    width: "230px",
    position: "fixed",
    top: "0px",
    overflowY: "scroll",
    height: "100vh",
    borderRadius: "10px 0 0 0 ",
    height: "min-content",
    backgroundColor: "#fff",
    zIndex: "99",
    animationName: "golist",
    animationDuration: ".6s",
  };

  return (
    <>
      <section className="lists" id="lists" style={comlist ? null : styleMode}>
        <ul className="ul_game">
          <li>
            <a href="#">
              <img src={gameing} alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;بازی و سرگرمی
            </a>
          </li>
        </ul>
        <h4>دسته بندی</h4>
        <ul>
          <li>
            <a href="#">
              <img src={barbell} alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;بدنسازی
            </a>
          </li>
          <li>
            <a href="#">
              <img src={pilates} alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;پیلاتس
            </a>
          </li>
          <li>
            <a href="#">
              <img src={dumbbell} alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;فیتنس
            </a>
          </li>
          <li>
            <a href="#">
              <img src={swimming} alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;شنا
            </a>
          </li>
          <li>
            <a href="#">
              <img src={trx} alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;TRX
            </a>
          </li>
          <li>
            <a href="#">
              <img src={aerobic} alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;ایروبیک
            </a>
          </li>
          <li>
            <a href="#">
              <img src={field} alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;فوتسال
            </a>
          </li>
          <li>
            <a href="#">
              <img src={yoga} alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;یوگا
            </a>
          </li>
          <li>
            <a href="#">
              <img src={football} alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;فوتبال
            </a>
          </li>
          <li>
            <a href="#">
              <img src={boxing} alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;رزمی
            </a>
          </li>
          <li>
            <a href="#">
              <img src={paragliding} alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;پاراگلادر
            </a>
          </li>
          <li>
            <a href="#">
              <img src={more} alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;موارد بیشتر
            </a>
          </li>
        </ul>
        <hr />
        <ul className="ul_soon">
          <li>
            <a href="#">
              <img src={desert} alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp; تور کویر <span>(به زودی)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={escape} alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp; اتاق فرار <span>(به زودی)</span>
            </a>
          </li>
        </ul>
      </section>
      <section className="main_list">
        <div id="cover"></div>
      </section>
      <div className="backlist" onClick={() => dispatch(GolistAction())}></div>
    </>
  );
};

export default Lists;
