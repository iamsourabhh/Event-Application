import React from "react";
import Header from "../../components/Header";
import Typography from "@material-ui/core/Typography";
import CalendarView from "./CalendarView/CalendarView";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import "./EventApp.css";
import CalendarEvents from "./CalendarEvents/CalendarEvents";

const EventApp = () => {
  return (
    <React.Fragment>
      <Header />

      <div className="container">
        <CalendarEvents />
        <div style={{ position: "relative" }}>
          <CalendarView />
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventApp;
