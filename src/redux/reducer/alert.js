import { SHOW_ALERT_TEXT, OPEN_ALERT } from "../const";

const initialState = {
  text: "Вы успешно довалили новую заметку!",
  // isValid: true,
  isOpen: false
  // id: 1
};

export const alertState = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ALERT_TEXT:
      return {
        ...state,
        isValid: !state.false
      };
    case OPEN_ALERT:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    default:
      return state;
  }
};
