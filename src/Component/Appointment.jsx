import React from "react";

const Appointment = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="./calendar-tick.png"
        alt="calendar"
        style={{ marginRight: "10px" }}
      />
      <h5 className="head">Appointment</h5>
    </div>
  );
};

export default Appointment;
