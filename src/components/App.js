import React from "react";
import Game from "./Game";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "../css/styles.css";
import Button from "react-bootstrap/Button";
import { startGame } from "../actions";
import { connect } from "react-redux";

const App = (props) => {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="justify-content-between">
        <Container>
          <Navbar.Brand>Adventure Game</Navbar.Brand>
          <Button
            variant="danger"
            className=""
            onClick={() => props.startGame()}
          >
            Start Game
          </Button>
        </Container>
      </Navbar>

      <Container>
        <Game></Game>
      </Container>
    </>
  );
};

export default connect(null, { startGame })(App);
