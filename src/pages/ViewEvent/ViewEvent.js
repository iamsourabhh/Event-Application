import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./ViewEvent.css";
import Header from "../../components/Header";
import Button from "@material-ui/core/Button";
import { deleteEvent } from "../CalendarEvents/EventApp.action";
import { Link } from "react-router-dom";

const ViewEvent = ({ selectedDateData, match, deleteEvent, history }) => {
  const selectedEventData = selectedDateData[match.params.eventId];
  if (selectedEventData === undefined) {
    return <Fragment />;
  }
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="button-container">
          <Link
            className="viewEventButton"
            to={`/edit-event/${match.params.date}/${match.params.eventId}`}
          >
            <Button mini size="small" color="primary" variant="raised">
              Edit
            </Button>
          </Link>
          <Button
            onClick={e => {
              deleteEvent(match.params.eventId);
              history.goBack();
            }}
            style={{ marginLeft: 15 }}
            className="viewEventButton"
            mini
            size="small"
            color="secondary"
            variant="raised"
          >
            DELETE
          </Button>
        </div>
        <table className="viewTable">
          <thead>
            <td>Key</td>
            <td>Value</td>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{selectedEventData.name}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{selectedEventData.date}</td>
            </tr>
            <tr>
              <td>Start Time</td>
              <td>{selectedEventData.startTime}</td>
            </tr>
            <tr>
              <td>End Time</td>
              <td>{selectedEventData.endTime}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    selectedDateData: state.cal.eventData[state.cal.selectedDate]
  };
};
export default connect(
  mapStateToProps,
  { deleteEvent }
)(ViewEvent);
