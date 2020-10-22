export default (message = "Welcome to the adventure game.", action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return message + "\n" + action.payload.message;
    default:
      return message;
  }
};
