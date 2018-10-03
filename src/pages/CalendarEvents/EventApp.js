import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import CalendarView from "./CalendarView/CalendarView";
import {
  changeDate,
  deleteEvent,
  nextDate,
  previousDate,
  setTodayDate
} from "./EventApp.action";
import "./EventApp.css";
import CalendarEvents from "./CalendarEvents/CalendarEvents";
import { checkConflicts } from "../../common/helpers";

const EventApp = ({
  date,
  changeDate,
  deleteEvent,
  eventData,
  nextDate,
  previousDate,
  setTodayDate
}) => {
  const events = checkConflicts(eventData);
  const formattedDate = date
    .split("/")
    .reverse()
    .join("-");
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <CalendarEvents
          activeDate={date}
          onChangeDate={changeDate}
          nextDate={nextDate}
          previousDate={previousDate}
          setTodayDate={setTodayDate}
        />
        <div style={{ position: "relative" }}>
          <CalendarView
            onEventDelete={deleteEvent}
            onEventEdit
            events={eventData}
            activeDate={formattedDate}
          />
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
  { changeDate, setTodayDate, deleteEvent, nextDate, previousDate }
)(EventApp);
