import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import CalendarView from "./CalendarView/CalendarView";
import { changeDate } from "./EventApp.action";

import "./EventApp.css";
import CalendarEvents from "./CalendarEvents/CalendarEvents";

const EventApp = ({ month, changeDate }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <CalendarEvents
          activeMonth={month}
          onChangeDate={changeDate}
          activeYear=""
        />
        <div style={{ position: "relative" }}>
          <CalendarView />
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    month: state.cal.selectedMonth
  };
};
export default connect(
  mapStateToProps,
  { changeDate }
)(EventApp);
