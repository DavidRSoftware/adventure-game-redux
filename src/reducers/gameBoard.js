export default (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "CHANGE_LOCATION":
      return state.map((elem, index) => {
        if (index === action.payload.location) return { type: "person" };
        return { type: "grass" };
      });
    case "CHANGE_MONEY":
      return state;
    case "START_GAME":
      return action.payload.initialBoard;
    default:
      return state; 
  }
};
