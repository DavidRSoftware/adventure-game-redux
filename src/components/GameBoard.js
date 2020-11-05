import React from "react";
import { connect } from "react-redux";
import { changeLocation, addMessage, changeBoard } from "../actions";
import { Rect } from "react-konva";
import Display from "./Display";
import treasure from "../images/treasureChest.png";
import Image from "react-bootstrap/Image";

const GameBoard = (props) => {
  const AMOUNT_PER_ROW = 4;

  const movementClickHandler = (index) => {
    props.changeLocation(index, 4);
    props.addMessage("You have moved your location.");
  };

  const calculateX = (index) => {
    return (index % AMOUNT_PER_ROW) * 100;
  };

  const calculateY = (index) => {
    return Math.floor(index / AMOUNT_PER_ROW) * 100;
  };

  const renderGameBoard = () => {
    return props.gameBoard.map((square, index) => {
      return (
        <Rect
          key={index}
          width={100}
          height={100}
          fill={square.type === "grass" ? "green" : "yellow"}
          x={calculateX(index)}
          y={calculateY(index)}
          shadowBlur={5}
          onClick={() => movementClickHandler(index)}
        />
      );
    });
  };

  const renderSidebarImage = (
    <div onClick={() => props.changeBoard(false)}>
      <Image src={treasure} alt="" fluid></Image>
      <h6 className="default-cursor">Treasure Chest</h6>
    </div>
  );

  return (
    <div>
      <Display
        renderDisplay={renderGameBoard()}
        renderSidebarImage={renderSidebarImage}
      ></Display>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { gameBoard: state.gameBoardReducer };
};

export default connect(mapStateToProps, {
  changeLocation,
  addMessage,
  changeBoard,
})(GameBoard);
