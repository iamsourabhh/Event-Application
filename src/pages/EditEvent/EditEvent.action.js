import { EDIT_EVENT } from "../../redux/actions/actionTypes";

export const editEvent = (date, startTime, endTime, eventName, id) => {
  const formattedDate = date
    .split("-")
    .reverse()
    .join("/");
  return {
    type: EDIT_EVENT,
    payload: { date: formattedDate, startTime, endTime, eventName, id }
  };
};
