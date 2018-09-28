import { combineReducers } from "redux";
import CalendarEventReducer from "../pages/CalendarEvents/CalendarEvents.reducer";

const rootReducer = combineReducers({
  cal: CalendarEventReducer
});

export default rootReducer;
