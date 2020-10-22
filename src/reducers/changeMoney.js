export default (amount = 100, action) => {
  switch (action.type) {
    case "CHANGE_MONEY":
      return amount + action.payload;
    default:
      return amount;
  }
};
