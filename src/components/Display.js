import React from "react";
import { connect } from "react-redux";
import { addMessage } from "../actions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Media from "react-bootstrap/Media";
import { Stage, Layer } from "react-konva";
import coin from "../images/coin.png";

const Display = (props) => {

  return (
    <div>
      <Row>
        <Col className="" lg={8} md={10} xs={12}>
          <Row>
            <Col md={8} xs={9}>
              <Stage width={400} height={300}>
                <Layer>{props.renderDisplay}</Layer>
              </Stage>
            </Col>
            <Col xs={3}>
              <div className="side-bar">
                {props.renderSidebarImage}

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
  return { money: state.changeMoneyReducer };
};

export default connect(mapStateToProps, { addMessage })(Display);
