export const changeMoney = (amount) => {
  return {
    type: "CHANGE_MONEY",
    payload: amount,
  };
};

export const changeLocation = (location, size) => {
  return {
    type: "CHANGE_LOCATION",
    payload: { location, size },
  };
};

export const startGame = () => {
  return {
    type: "START_GAME",
    payload: {
      initialBoard: [
        { type: "person" },
        { type: "grass" },
        { type: "grass" },
        { type: "grass" },
        { type: "grass" },
        { type: "grass" },
        { type: "grass" },
        { type: "grass" },
        { type: "grass" },
        { type: "grass" },
        { type: "grass" },
        { type: "grass" },
      ],
      initialChest: [
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
      ],

    },
  };
};

export const addMessage = (message) => {
  return {
    type: "ADD_MESSAGE",
    payload: {
      message,
    },
  };
};

export const changeBoard = (value) => {
  return { type: "CHANGE_BOARD", payload: value };
};

export const addItem = (item) => {
  return { type: "ADD_ITEM", payload: item}
}