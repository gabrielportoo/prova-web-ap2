import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/" style={{ marginLeft: "10px" }}>
        CRUD Alunos
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Alunos" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/alunos/novo">
              Criar Aluno
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/alunos">
              Listar Alunos
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/alunos-por-curso">
              Listar por Curso
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
