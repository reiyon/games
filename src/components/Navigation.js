import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Navigation = () => (
  <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
    <Link to="/" className="navbar-brand">
      Nostalgic Games
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/memory" className="nav-link">
          Memory
        </Link>
        <Link to="/snake" className="nav-link">
          Snake
        </Link>
        <Link to="/minesweeper" className="nav-link">
          Minesweeper
        </Link>
        <Link to="/thai" className="nav-link">
          Thai
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
