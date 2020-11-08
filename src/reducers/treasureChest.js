export default (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "START_GAME":
      return action.payload.initialChest;
    case "ADD_ITEM":
      let indexOfEmpty = state.findIndex((e) => e.type === "empty");
      if (indexOfEmpty === -1) return state;
      return state.map((elem, index) => {
        if (index === indexOfEmpty) return { type: action.payload };
        return elem;
      });
    default:
      return state;
  }
};
