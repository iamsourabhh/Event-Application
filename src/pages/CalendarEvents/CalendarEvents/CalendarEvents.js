import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const CalendarEvents = () => {
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
        <Select
          style={{ marginLeft: 5, width: 100 }}
          onChange={this.handleChange}
          inputProps={{
            name: "age",
            id: "age-simple"
          }}
        >
          {months.map(month => {
            return <MenuItem value={month.value}>{month.name}</MenuItem>;
          })}
        </Select>

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

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
].map((month, i) => {
  return {
    name: month,
    value: i
  };
});
