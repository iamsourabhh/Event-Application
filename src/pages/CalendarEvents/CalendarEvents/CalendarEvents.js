import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import moment from "moment";

const CalendarEvents = ({ activeDate, onChangeDate }) => {
  const dateNumber = new Date(activeDate);
  console.log(activeDate);
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
        <Button style={{ marginLeft: 5 }} color="primary" variant="contained">
          Add Event
        </Button>

        <TextField
          onChange={e => {
            onChangeDate(e.target.value);
          }}
          id="date"
          label="Date"
          type="date"
          // value={moment(activeDate).format("YYYY-MM-DD")}
          value={activeDate
            .split("/")
            .reverse()
            .join("-")}
          style={{ marginLeft: 35 }}
          InputLabelProps={{
            shrink: true
          }}
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
