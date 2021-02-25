import React, { useState, useEffect } from "react";
import moment from "moment";
import "./style.css";

export default function Clock() {
  const [time, setTime] = useState({
    time: moment().format("LTS"),
    date: moment().format("dddd ,MMMM Do YYYY"),
  });

  useEffect(() => {
    setInterval(() => {
      setTime({
        time: moment().format("LTS"),
        date: moment().format("dddd ,MMMM Do YYYY"),
      });
    }, 1000);
  });
  return (
    <div className="clock-container">
      <div className="clock-time">{time.time}</div>
      <div className="clock-date">{time.date}</div>
    </div>
  );
}
