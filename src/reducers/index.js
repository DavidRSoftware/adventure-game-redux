import { combineReducers } from "redux";
import changeMoneyReducer from "./changeMoney";
import gameBoardReducer from "./gameBoard";
import changeMessageReducer from "./changeMessage";
import playingReducer from "./playingReducer";
import treasureChestReducer from "./treasureChest";

export default combineReducers({
  changeMoneyReducer,
  gameBoardReducer,
  changeMessageReducer,
  playingReducer,
  treasureChestReducer,
});
