import {
  ADD_NOTES,
  REMOVE_NOTES,
  ADD_IMPORTANT,
  SHOW_ALERT_TEXT,
  IS_VALID_ALERT,
  OPEN_ALERT,
  CALCULATE_NOTES
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

// export const calculateNotes = () => {
//   return {
//     type: CALCULATE_NOTES
//   };
// };
