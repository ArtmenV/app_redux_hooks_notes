import { combineReducers } from "redux";
import { counterReducer } from "./counter-reducer.js";
import { Notes } from "./notes.js";
import { alertState } from "./alert";

export default combineReducers({
  counterReducer,
  Notes,
  alertState
});
