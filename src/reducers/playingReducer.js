export default (state = true, action) => {
  console.log(action);
  switch (action.type) {
    case "CHANGE_BOARD":
      return action.payload;
    default:
      return state;
  }
};
