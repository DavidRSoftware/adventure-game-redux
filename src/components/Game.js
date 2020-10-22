import React from "react";
import GameBoard from "./GameBoard";
import MessageBoard from "./MessageBoard";
import Chest from "./Chest";

import { connect } from "react-redux";

const Game = (props) => {
  const renderBoard = () => {
    if (props.playing) return <GameBoard></GameBoard>;
    else return <Chest></Chest>;
  };
  return (
    <div className="mt-3">
      {renderBoard()}
      <MessageBoard></MessageBoard>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { playing: state.playingReducer };
};

export default connect(mapStateToProps,{})(Game);
