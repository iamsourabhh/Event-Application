import { CHANGE_MONTH } from "../../redux/actions/actionTypes";

const DEFAULT_STATE = {
  loading: true,
  isError: false,
  todaysDate: new Date().toLocaleDateString(),
  selectedDate: new Date().toLocaleDateString()
};

const EventAppReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_MONTH:
      return {
        ...state,
        selectedDate: payload.date
      };
    default:
      return state;
  }
};

export default EventAppReducer;
