import { SHOW_ALERT_TEXT } from "../const";

const initialState = {
  text: "Вы успешно довалили новую заметку!",
  show: true
};

export const alertState = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ALERT_TEXT:
      return state.text;
    default:
      return state;
  }
};
