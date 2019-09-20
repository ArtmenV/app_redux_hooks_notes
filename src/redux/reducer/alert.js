import { OPEN_ALERT, IS_VALID_ALERT } from "../const";

const initialState = {
  text: "Вы успешно довалили новую заметку!",
  isValid: false,
  isOpen: false
  // id: 1
};

export const alertState = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_VALID_ALERT:
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
