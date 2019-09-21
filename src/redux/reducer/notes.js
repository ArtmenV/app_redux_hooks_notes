import {
  ADD_NOTES,
  REMOVE_NOTES,
  ADD_IMPORTANT,
  CALCULATE_NOTES
} from "../const";

const initialState = [
  { text: "Придти покушать", id: 1, important: false },
  { text: "Ложится спать", id: 2, important: false },
  { text: "Постирать вещи", id: 3, important: false },
  { text: "Купить майбах", id: 4, important: false }
];

export const Notes = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NOTES:
      return [...state, payload];
    case REMOVE_NOTES:
      return state.filter(note => note.id !== payload);
    // case CALCULATE_NOTES:
    //   return state.map(notes => notes.length);
    case ADD_IMPORTANT:
      return state.map(item => ({
        ...item,
        important: item.id === payload ? !item.important : item.important
      }));

    default:
      return state;
  }
};
