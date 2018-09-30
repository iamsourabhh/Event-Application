import { CHANGE_MONTH } from "../../redux/actions/actionTypes";

export const changeDate = date => {
  return {
    type: CHANGE_MONTH,
    payload: { date }
  };
};
