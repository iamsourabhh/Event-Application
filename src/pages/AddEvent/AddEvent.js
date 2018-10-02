import React, { Fragment, Component } from "react";
import Header from "../../components/Header";
import { connect } from "react-redux";
import { addEvent } from "./AddEvent.action";
import { Redirect } from "react-router-dom";
import uuid from "uuid/v4";
import EventForm from "../../components/EventForm/EventForm";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.match.params.date,
      startTime: "00:00",
      endTime: "00:00",
      eventName: "",
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
    const id = uuid();
    this.props.addEvent(date, startTime, endTime, eventName, id);
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
            title={"Add an event"}
            date={this.state.date}
            eventName={this.state.eventName}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            error={this.state.error}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = () => {
  return {};
};
export default connect(
  mapStateToProps,
  { addEvent }
)(AddEvent);
