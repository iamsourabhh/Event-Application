import React, { Component } from "react";
import moment from "moment";

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseOver: false
    };
  }

  render() {
    const { backgroundColor, eventName, startTime, endTime } = this.props;
    const sTime = moment(startTime, "HH:mm").format("hh:mm A");
    const eTime = moment(endTime, "HH:mm").format("hh:mm A");

    const startHour = moment(startTime, "HH:mm").get("hour");
    const startMinutes = moment(startTime, "HH:mm").get("minutes");

    const endHour = moment(endTime, "HH:mm").get("hour");
    const endMinutes = moment(endTime, "HH:mm").get("minutes");

    const topPosition = (startHour + startMinutes / 60) * 40;
    const cardHeight =
      (endHour + endMinutes / 60 - (startHour + startMinutes / 60)) * 40;

    return (
      <div
        onMouseEnter={() => {
          this.setState({ isMouseOver: true });
        }}
        onMouseLeave={() => {
          this.setState({ isMouseOver: false });
        }}
        style={{
          position: "absolute",
          top: topPosition,
          height: cardHeight,
          zIndex: this.state.isMouseOver ? 44 : 4,
          // opacity: this.state.isMouseOver ? 0.8 : 1,
          backgroundColor,
          border: 1,
          borderStyle: "solid",
          borderColor: "#111",

          width: "100%",
          overflowY: "scroll",
          paddingTop: 1,
          paddingBottom: 1
        }}
      >
        <h5 style={{ margin: 0, paddingLeft: 10, paddingTop: 1 }}>
          {eventName}
        </h5>
        <h5 style={{ margin: 0, paddingLeft: 10 }}>
          {sTime} to {eTime}
        </h5>
      </div>
    );
  }
}

export default EventCard;
