import React from "react";

const EventCard = ({
  top,
  height,
  backgroundColor,
  eventName,
  startTime,
  endTIme
}) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 4,
        height,
        top,
        backgroundColor,
        width: "100%",
        paddingTop: 1,
        paddingBottom: 1
      }}
    >
      <h5 style={{ margin: 0, paddingLeft: 10, paddingTop: 1 }}>{eventName}</h5>
      <h5 style={{ margin: 0, paddingLeft: 10 }}>
        {startTime} to {endTIme}
      </h5>
    </div>
  );
};

export default EventCard;
