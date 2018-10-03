import React from "react";
import Typography from "@material-ui/core/Typography";
import "./CalendarView.css";
import { getTimeFromInteger } from "../../../common/helpers";
import EventCard from "../../../components/EventCard/EventCard";

const CalendarView = ({ events, onEventDelete, onEventEdit, activeDate }) => {
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
          {Object.keys(events).map((id, i) => {
            return (
              <EventCard
                key={id}
                backgroundColor={"#d3d3d3"}
                eventName={events[id].name}
                level={events[id].level}
                left={events[id].left}
                startTime={events[id].startTime}
                endTime={events[id].endTime}
                onDelete={onEventDelete}
                onEdit={onEventEdit}
                id={id}
                date={activeDate}
              />
            );
          })}
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
