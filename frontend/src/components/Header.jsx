import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { Logo } from "../Icons";

const Header = ({ title }) => {
  return (
    <Navbar  variant="dark" style={{ backgroundColor: "#eee" }}>
      <Container>
        <Logo alt={title} style={{ maxWidth: "12rem", maxHeight: "2rem" }} />
      </Container>
    </Navbar>
  );
};

export default Header;
