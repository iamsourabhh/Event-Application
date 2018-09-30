import { CHANGE_MONTH, DELETE_EVENT } from "../../redux/actions/actionTypes";
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
