import React from "react";
import point from "./point.svg";
import "./style.css";
export default function Home() {
  return (
    <>
      <div className="page page-home">
        <div className=" title home-title">Welcome</div>
        <div className="title home-description">myLocation Application</div>
        <img className="point" src={point} alt="point" />
      </div>
    </>
  );
}
