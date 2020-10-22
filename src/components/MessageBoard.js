import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MessageBoard = (props) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    console.log("Effect!");
    textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
  });

  return (
    <div>
      <Row>
        <Col>
          <textarea
            rows="5"
            cols="50"
            value={props.message}
            readOnly
            ref={textAreaRef}
          ></textarea>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { message: state.changeMessageReducer };
};

export default connect(mapStateToProps, null)(MessageBoard);
