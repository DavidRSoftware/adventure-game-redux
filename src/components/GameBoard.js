import React from "react";
import { connect } from "react-redux";
import {
  changeMoney,
  changeLocation,
  addMessage,
  changeBoard,
} from "../actions";
import { Stage, Layer, Rect } from "react-konva";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import treasure from "../images/treasureChest.png";
import coin from "../images/coin.png";
import Image from "react-bootstrap/Image";
import Media from "react-bootstrap/Media";

const GameBoard = (props) => {
  const AMOUNT_PER_ROW = 4;
  const moneyClickHandler = () => {
    props.changeMoney(100);
    props.addMessage("You have gained 100 coins.");
  };

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

  return (
    <div>
      <Row>
        <Col className="" lg={8} md={10} xs={12} >
          <Row>
          <Col md={8} xs={9}>
            <Stage width={400} height={300}>
              <Layer>
                {props.gameBoard.map((square, index) => {
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
                })}
              </Layer>
            </Stage>
          </Col>
          <Col xs={3}>
            <div className="side-bar">
              <div onClick={() => props.changeBoard(false)}>
                <Image src={treasure} alt="" fluid></Image>
                <h6 className="default-cursor">Treasure Chest</h6>
              </div>

              <Media>
                <div className="p-1">
                  <Image src={coin} alt="" fluid></Image>
                </div>
                <Media.Body>
                  <div className="p-1">
                    <h1 className="">{props.money}</h1>
                  </div>
                </Media.Body>
              </Media>
              <button onClick={() => moneyClickHandler()}>Click</button>
            </div>
          </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { money: state.changeMoneyReducer, gameBoard: state.gameBoardReducer };
};

export default connect(mapStateToProps, {
  changeMoney,
  changeLocation,
  addMessage,
  changeBoard,
})(GameBoard);
