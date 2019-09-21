import {
  ADD_NOTES,
  REMOVE_NOTES,
  ADD_IMPORTANT,
  VALID_NOTES,
  SHOW_ALERT_TEXT,
  DELETE_ALERT,
  IS_VALID_ALERT,
  OPEN_ALERT
} from "../const";

export const addNotes = notes => {
  return {
    type: ADD_NOTES,
    payload: notes
  };
};

export const removeNotes = id => {
  return {
    type: REMOVE_NOTES,
    payload: id
  };
};

export const addImportant = id => {
  return {
    type: ADD_IMPORTANT,
    payload: id
  };
};

export const isValidAlert = data => {
  return {
    type: IS_VALID_ALERT,
    payload: data
  };
};

export const openAlert = () => {
  return {
    type: OPEN_ALERT
  };
};

export const showAlertText = () => {
  return {
    type: SHOW_ALERT_TEXT
  };
};
