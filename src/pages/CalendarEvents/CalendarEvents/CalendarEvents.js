import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const CalendarEvents = ({ activeMonth, onChangeDate }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 0.1 }}>
        <Typography variant="title" color="inherit">
          {28}
        </Typography>
        <Typography variant="title" color="inherit">
          Fri
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
          style={{ marginLeft: 35 }}
          defaultValue="2017-05-24"
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
