import { combineReducers } from "redux";
import { Notes } from "./notes.js";
import { alertState } from "./alert";

export default combineReducers({
  Notes,
  alertState
});
