import React from "react";
import Typography from "@material-ui/core/Typography";
import "./CalendarView.css";
import { getTimeFromInteger } from "../../../common/helpers";
import EventCard from "../../../components/EventCard/EventCard";

const CalendarView = () => {
  return (
    <React.Fragment>
      <div className="calendar-view-container">
        <div className="calendar-view-days">
          {[...Array(24)].map((i, index) => {
            return (
              <TimeLineHour key={index} hour={getTimeFromInteger(index)} />
            );
          })}
        </div>
        <div className="calendar-view-timeline">
          <EventCard
            top={40}
            height={38}
            backgroundColor={"#d3d3d3"}
            eventName={"Event 1"}
            startTime={"2:30 PM"}
            endTIme={"3:30 PM"}
          />
          {[...Array(24)].map((i, index) => {
            return <TimeLineCanvas key={index} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CalendarView;

const TimeLineHour = ({ hour }) => (
  <div className="timeline-hour-container">
    <Typography className="timeline-hour-text" variant="body2" color="inherit">
      {hour}
    </Typography>
  </div>
);

const TimeLineCanvas = () => {
  return <div className="timeline-canvas-container" />;
};
