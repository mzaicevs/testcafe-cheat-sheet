import React from "react";
import { Jumbotron, Container, Row, Image } from "react-bootstrap";

const Header = () => (
  <Jumbotron>
    <Container style={{ marginLeft: "12px" }}>
      <Row>
        <a
          href="https://devexpress.github.io/testcafe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://devexpress.github.io/testcafe/images/site-header-logo.svg"
            rounded
          />
        </a>
      </Row>
      <Row>
        <h1>Cheat Sheet</h1>
      </Row>
      <Row>
        <p>Copy TestCafe commands and code...and stuff!</p>
      </Row>
    </Container>
  </Jumbotron>
);

export default Header;
