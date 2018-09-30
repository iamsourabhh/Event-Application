import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

const CalendarEvents = ({ activeDate, onChangeDate }) => {
  const formattedDate = activeDate
    .split("/")
    .reverse()
    .join("-");
  const dateNumber = new Date(formattedDate);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 0.1 }}>
        <Typography variant="title" color="inherit">
          {dateNumber.getDate()}
        </Typography>
        <Typography variant="title" color="inherit">
          {days[dateNumber.getDay()]}
        </Typography>
      </div>

      <div style={{ flex: 0.9 }}>
        <Button color="primary" variant="contained">
          Today
        </Button>
        <Link to={`add-event/${formattedDate}`}>
          <Button style={{ marginLeft: 5 }} color="primary" variant="contained">
            Add Event
          </Button>
        </Link>

        <TextField
          onChange={e => {
            onChangeDate(e.target.value);
          }}
          id="date"
          label="Date"
          type="date"
          value={formattedDate}
          style={{ marginLeft: 35 }}
        />
        <Button
          color="primary"
          className="navigation-buttons"
          variant="contained"
        >
          Next
        </Button>
        <Button
          color="primary"
          className="navigation-buttons"
          variant="contained"
        >
          Previous
        </Button>
      </div>
    </div>
  );
};

export default CalendarEvents;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
