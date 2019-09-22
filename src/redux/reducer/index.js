import { combineReducers } from "redux";
import { Notes } from "./notes.js";
import { alertState } from "./alert";
import { searchNotes } from "./searchNotes";

export default combineReducers({
  Notes,
  alertState,
  searchNotes
});
