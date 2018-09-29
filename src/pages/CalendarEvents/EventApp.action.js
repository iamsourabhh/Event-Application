import { CHANGE_MONTH } from "../../redux/actions/actionTypes";

export const changeMonth = month => {
  console.log(month);
  return {
    type: CHANGE_MONTH,
    payload: { month }
  };
};
