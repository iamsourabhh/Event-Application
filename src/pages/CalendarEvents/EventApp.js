import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import CalendarView from "./CalendarView/CalendarView";
import { changeDate } from "./EventApp.action";
import "./EventApp.css";
import CalendarEvents from "./CalendarEvents/CalendarEvents";

const EventApp = ({ date, changeDate, eventData }) => {
  console.log(eventData);
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <CalendarEvents activeDate={date} onChangeDate={changeDate} />
        <div style={{ position: "relative" }}>
          <CalendarView events={eventData} />
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    date: state.cal.selectedDate,
    eventData:
      state.cal.eventData[state.cal.selectedDate] === undefined
        ? {}
        : state.cal.eventData[state.cal.selectedDate]
  };
};
export default connect(
  mapStateToProps,
  { changeDate }
)(EventApp);
