export const habitReducer = (state, action) => {
  switch (action.type) {
    case "ADD_HABIT":
      return { ...state, habitsData: [...state.habitsData, action.payload] };
    case "EDIT_HABIT":
      return { ...state, habitsData: action.payload };
    case "DELETE_HABIT":
      return { ...state, habitsData: action.payload };
    case "ARCHIVE_HABIT":
      return { ...state, habitsData: action.payload };
    default:
      return state;
  }
};
