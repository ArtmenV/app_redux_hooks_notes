import {
  INCREMENT,
  DECREMENT,
  ADD_NOTES,
  REMOVE_NOTES,
  ADD_IMPORTANT,
  VALID_NOTES,
  SHOW_ALERT_TEXT
} from "../const";

export const increment = id => {
  return {
    type: INCREMENT,
    payload: id
  };
};

export const decrement = id => {
  return {
    type: DECREMENT,
    payload: id
  };
};

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

export const addIsValidNotes = () => {
  return {
    type: VALID_NOTES
  };
};

export const showAlertText = () => {
  return {
    type: SHOW_ALERT_TEXT
  };
};
