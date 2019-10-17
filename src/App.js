import React from "react";
import Recipes from "./components/Recipes";
import SearchBar from "./components/SearchBar";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Container className="hero" fluid="true">
        <Row className="hero__row">
          <Col md={12} className="hero__sidebar">
            <div className="hero__menu">
              <p>Sign Up</p>
              <p>Sign In</p>
            </div>
            <div className="hero__searchbar">
              <h1>Welcome to Leftovers</h1>
              <h3>
                Leftovers prevents food waste by providing recipes with food you
                have in your fridge
              </h3>
              <SearchBar></SearchBar>
              <p className="hero__helptext">
                Write ingredients separated by a space: "pasta tomato avocado
                cheese"
              </p>
            </div>
            <div></div>
          </Col>
        </Row>
      </Container>
      <Container fluid="true">
        <Row>
          <Recipes></Recipes>
        </Row>
      </Container>
    </div>
  );
}

export default App;
