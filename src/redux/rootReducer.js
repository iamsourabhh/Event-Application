import { combineReducers } from "redux";
import EventAppReducer from "../pages/CalendarEvents/EventApp.reducer";

const rootReducer = combineReducers({
  cal: EventAppReducer
});

export default rootReducer;
