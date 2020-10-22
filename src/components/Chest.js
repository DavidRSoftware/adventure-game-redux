import React from "react";
import { connect } from "react-redux";
import {
  changeMoney,
  changeLocation,
  addMessage,
  changeBoard,
} from "../actions";
import { Stage, Layer, Image as KonvaImage } from "react-konva";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import map from "../images/map.png";
import coin from "../images/coin.png";
import Image from "react-bootstrap/Image";
import Media from "react-bootstrap/Media";
import useImage from "use-image";

const Chest = (props) => {
  const AMOUNT_PER_ROW = 4;
  const [emptyImage] = useImage("https://i.ibb.co/CJBf7MH/empty.png");
  const [swordImage] = useImage("https://i.ibb.co/NjSrw5p/sword.png");

  const calculateX = (index) => {
    return (index % AMOUNT_PER_ROW) * 100;
  };

  const calculateY = (index) => {
    return Math.floor(index / AMOUNT_PER_ROW) * 100;
  };

  return (
    <div>
      <Row>
        <Col className="" lg={8} md={10} xs={12}>
          <Row>
            <Col md={8} xs={9}>
              <Stage width={400} height={300}>
                <Layer>
                  {props.chest.map((square, index) => {
                    return (
                      <KonvaImage
                        key={index}
                        width={100}
                        height={100}
                        x={calculateX(index)}
                        y={calculateY(index)}
                        image={
                          square.type === "sword" ? swordImage : emptyImage
                        }
                      />
                    );
                  })}
                </Layer>
              </Stage>
            </Col>
            <Col xs={3}>
              <div className="side-bar">
                <div onClick={() => props.changeBoard(true)}>
                  <Image src={map} alt="" fluid></Image>
                  <h4 className="default-cursor">Go Back</h4>
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
  return { money: state.changeMoneyReducer, chest: state.treasureChestReducer };
};

export default connect(mapStateToProps, {
  changeMoney,
  changeLocation,
  addMessage,
  changeBoard,
})(Chest);
