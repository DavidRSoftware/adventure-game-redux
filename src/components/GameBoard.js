import React from "react";
import { connect } from "react-redux";
import {
  changeLocation,
  addMessage,
  changeBoard,
  changeMoney,
  addItem,
} from "../actions";
import { Image as KonvaImage } from "react-konva";
import Display from "./Display";
import treasure from "../images/treasureChest.png";
import Image from "react-bootstrap/Image";
import useImage from "use-image";

const GameBoard = (props) => {
  const AMOUNT_PER_ROW = 4;
  const [personOnSandImage] = useImage(
    "https://i.ibb.co/9p58Yb8/person-Onsand.png"
  );
  const [sandImage] = useImage("https://i.ibb.co/BL5v6vF/sand.png");

  const movementClickHandler = (index, squareType) => {
    if (squareType === "person") return;
    props.changeLocation(index, 4);
    props.addMessage("You have moved your location.");
    let random = Math.random();
    if (random < 0.33) {
      props.addMessage(
        "You have found a sword."
      );
      props.addItem("sword");
    } else if (random < 0.66) {
      let randomMoney = Math.floor(Math.random() * 100 + 1);
      props.addMessage(`You have have found ${randomMoney} gold coins.`);
      props.changeMoney(randomMoney);
    }
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
        <KonvaImage
          key={index}
          width={100}
          height={100}
          x={calculateX(index)}
          y={calculateY(index)}
          image={square.type === "person" ? personOnSandImage : sandImage}
          onClick={() => movementClickHandler(index, square.type)}
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
  changeMoney,
  addItem,
})(GameBoard);
