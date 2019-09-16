import { combineReducers } from "redux";
import { counterReducer } from "./counter-reducer.js";
import { Notes } from "./notes.js";

export default combineReducers({
  counterReducer,
  Notes
});
