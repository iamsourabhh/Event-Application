import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const EventForm = ({
  date,
  eventName,
  startTime,
  endTime,
  error,
  onChange,
  onSubmit,
  disableDateField,
  title
}) => {
  return (
    <Fragment>
      <Typography variant="headline" color="inherit">
        {title}
      </Typography>
      <TextField
        onChange={e => {
          onChange(e.target);
        }}
        disabled={disableDateField}
        id="date"
        name="date"
        label="Date"
        type="date"
        value={date}
      />
      <br />
      <br />
      <TextField
        onChange={e => {
          onChange(e.target);
        }}
        error={error}
        id="eventName"
        name="eventName"
        label="Event Name"
        type="text"
        value={eventName}
      />
      <br />
      <br />
      <TextField
        onChange={e => {
          onChange(e.target);
        }}
        id="startTime"
        name="startTime"
        label="Start Time"
        type="time"
        style={{ width: 100 }}
        value={startTime}
      />
      <br />
      <br />
      <TextField
        onChange={e => {
          onChange(e.target);
        }}
        id="endTime"
        name="endTime"
        label="End Time"
        type="time"
        style={{ width: 100 }}
        value={endTime}
      />
      <br />
      <br />

      <Button onClick={onSubmit} color="primary" variant="contained">
        Add Event
      </Button>
    </Fragment>
  );
};

export default EventForm;
