import {
  CHANGE_MONTH,
  DELETE_EVENT,
  NEXT_DATE,
  PREVIOUS_DATE,
  SET_TODAY_DATE
} from "../../redux/actions/actionTypes";
import moment from "moment";

export const changeDate = date => {
  const formattedDate = moment(date).format("DD/MM/YYYY");
  return {
    type: CHANGE_MONTH,
    // payload: { date }
    payload: { date: formattedDate }
  };
};
export const deleteEvent = id => {
  return {
    type: DELETE_EVENT,
    // payload: { date }
    payload: { id }
  };
};
export const nextDate = date => {
  const formattedDate = date
    .split("/")
    .reverse()
    .join("-");
  const day = new Date(formattedDate);
  const nextDay = new Date(formattedDate);
  nextDay.setDate(day.getDate() + 1);

  return {
    type: NEXT_DATE,
    payload: { date: nextDay.toLocaleDateString() }
  };
};
export const setTodayDate = date => {
  return {
    type: SET_TODAY_DATE
  };
};
export const previousDate = date => {
  const formattedDate = date
    .split("/")
    .reverse()
    .join("-");
  const day = new Date(formattedDate);
  const previousDate = new Date(formattedDate);
  previousDate.setDate(day.getDate() - 1);

  return {
    type: PREVIOUS_DATE,
    payload: { date: previousDate.toLocaleDateString() }
  };
};
