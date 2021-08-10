import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextareaAutosize from "react-textarea-autosize";

const MessageBoard = (props) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
  });

  return (
    <div>
      <Row>
        <Col>
          <TextareaAutosize
            value={props.message}
            ref={textAreaRef}
            readOnly
            cols="50"
            maxRows="5"
            minRows="5"
          />
          {/* <textarea
            rows="5"
            cols="50"
            value={props.message}
            readOnly
            ref={textAreaRef}
          ></textarea> */}
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
