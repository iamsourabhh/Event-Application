import { CHANGE_MONTH } from "../../redux/actions/actionTypes";
import { data } from "../../data/data";
import { normalizeEventData } from "../../common/helpers";

const DEFAULT_STATE = {
  loading: true,
  isError: false,
  todaysDate: new Date().toLocaleDateString(),
  selectedDate: new Date().toLocaleDateString(),
  eventData: normalizeEventData(data)
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
