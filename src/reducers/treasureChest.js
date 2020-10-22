export default (state = [], action) => {
    console.log(action);
    switch (action.type) {
      case "START_GAME":
        return action.payload.initialChest;
      default:
        return state; 
    }
  };