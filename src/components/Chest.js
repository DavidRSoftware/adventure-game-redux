import React from "react";
import { connect } from "react-redux";
import {
  changeBoard,
} from "../actions";
import { Image as KonvaImage } from "react-konva";
import map from "../images/map.png";
import Image from "react-bootstrap/Image";
import useImage from "use-image";
import Display from "./Display";

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

  const renderChest = () => {
    return props.chest.map((square, index) => {
      return (
        <KonvaImage
          key={index}
          width={100}
          height={100}
          x={calculateX(index)}
          y={calculateY(index)}
          image={square.type === "sword" ? swordImage : emptyImage}
        />
      );
    });
  };

  const renderSidebarImage = (
    <div onClick={() => props.changeBoard(true)}>
      <Image src={map} alt="" fluid></Image>
      <h4 className="default-cursor">Go Back</h4>
    </div>
  );

  return (
    <div>
      <Display
        renderDisplay={renderChest()}
        renderSidebarImage={renderSidebarImage}
      ></Display>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { chest: state.treasureChestReducer };
};

export default connect(mapStateToProps, {
  changeBoard,
})(Chest);
