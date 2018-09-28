import React from "react";
import Header from "../../components/Header";
import CalendarView from "./CalendarView/CalendarView";
import "./CalendarEvents.css";

const CalendarEvents = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <CalendarView todayDate={28} todayDay={"Friday"} />
      </div>
    </React.Fragment>
  );
};

export default CalendarEvents;
