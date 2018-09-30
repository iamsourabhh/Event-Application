import { ADD_EVENT } from "../../redux/actions/actionTypes";

export const addEvent = (date, startTime, endTime, eventName, id) => {
  const formattedDate = date
    .split("-")
    .reverse()
    .join("/");
  return {
    type: ADD_EVENT,
    payload: { date: formattedDate, startTime, endTime, eventName, id }
  };
};
