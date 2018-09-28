import React from "react";
import Typography from "@material-ui/core/Typography";
import "./CalendarView.css";
import { getTimeFromInteger } from "../../../common/helpers";

const CalendarView = ({ todayDate, todayDay }) => {
  return (
    <React.Fragment>
      <Typography variant="title" color="inherit">
        {todayDate}
      </Typography>
      <Typography variant="title" color="inherit">
        {todayDay}
      </Typography>

      <div className="calendar-view-container">
        <div className="calendar-view-days">
          {[...Array(24)].map((i, index) => {
            return <TimeLineHour hour={getTimeFromInteger(index)} />;
          })}
        </div>
        <div className="calendar-view-timeline">
          {[...Array(24)].map((i, index) => {
            return <TimeLineCanvas />;
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
