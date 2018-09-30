import { CHANGE_MONTH, ADD_EVENT } from "../../redux/actions/actionTypes";
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
    case ADD_EVENT:
      return {
        ...state,
        eventData: {
          ...state.eventData,
          [state.selectedDate]: {
            ...state.eventData[state.selectedDate],
            [payload.id]: {
              date: payload.date,
              startTime: payload.startTime,
              endTime: payload.endTime,
              name: payload.eventName,
              id: payload.id
            }
          }
        }
      };
    default:
      return state;
  }
};

export default EventAppReducer;
