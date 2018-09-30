import React, { Fragment, Component } from "react";
import Header from "../../components/Header";
import { connect } from "react-redux";
import { addEvent } from "./AddEvent.action";
import { Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import uuid from "uuid/v4";

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
          <Typography variant="headline" color="inherit">
            Add an event
          </Typography>
          <TextField
            onChange={e => {
              this.onChange(e.target);
            }}
            id="date"
            name="date"
            label="Date"
            type="date"
            value={this.state.date}
          />
          <br />
          <br />
          <TextField
            onChange={e => {
              this.onChange(e.target);
            }}
            error={this.state.error}
            id="eventName"
            name="eventName"
            label="Event Name"
            type="text"
            value={this.state.eventName}
          />
          <br />
          <br />
          <TextField
            onChange={e => {
              this.onChange(e.target);
            }}
            id="startTime"
            name="startTime"
            label="Start Time"
            type="time"
            style={{ width: 100 }}
            value={this.state.startTime}
          />
          <br />
          <br />
          <TextField
            onChange={e => {
              this.onChange(e.target);
            }}
            id="endTime"
            name="endTime"
            label="End Time"
            type="time"
            style={{ width: 100 }}
            value={this.state.endTime}
          />
          <br />
          <br />

          <Button onClick={this.onSubmit} color="primary" variant="contained">
            Add Event
          </Button>
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
