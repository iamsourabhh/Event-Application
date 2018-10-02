import React, { Fragment, Component } from "react";
import Header from "../../components/Header";
import { connect } from "react-redux";
import { editEvent } from "./EditEvent.action";
import { Redirect } from "react-router-dom";
import EventForm from "../../components/EventForm/EventForm";

class EditEvent extends Component {
  constructor(props) {
    super(props);
    const eventData = props.selectedDateData[props.match.params.eventId];
    this.state = {
      date: props.match.params.date,
      startTime: eventData.startTime,
      endTime: eventData.endTime,
      eventName: eventData.name,
      error: false,
      toHome: false
    };
  }
  onChange = target => {
    const { name, value } = target;

    switch (name) {
      case "date":
        this.setState({ date: value });
        break;
      case "eventName":
        this.setState({ eventName: value, error: false });
        break;
      case "startTime":
        this.setState({ startTime: value });
        break;
      case "endTime":
        this.setState({ endTime: value });
        break;
      default:
        break;
    }
  };
  onSubmit = () => {
    const { date, startTime, endTime, eventName } = this.state;
    if (eventName === "") {
      this.setState({ error: true });
      return;
    }
    this.props.editEvent(
      date,
      startTime,
      endTime,
      eventName,
      this.props.match.params.eventId
    );
    this.setState({ toHome: true });
  };
  render() {
    if (this.state.toHome === true) {
      return <Redirect to="/" />;
    }
    return (
      <Fragment>
        <Header />
        <div style={{ margin: "5%" }}>
          <EventForm
            history={this.props.history}
            title={"Edit an event"}
            date={this.state.date}
            eventName={this.state.eventName}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            error={this.state.error}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            buttonText={"Edit Event"}
            disableDateField
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedDateData: state.cal.eventData[state.cal.selectedDate]
  };
};
export default connect(
  mapStateToProps,
  { editEvent }
)(EditEvent);
