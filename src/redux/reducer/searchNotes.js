import { SEARCH_NOTES } from "../const";

export const searchNotes = (state = "", { type, payload }) => {
  switch (type) {
    case SEARCH_NOTES:
      return payload;
    default:
      return state;
  }
};
