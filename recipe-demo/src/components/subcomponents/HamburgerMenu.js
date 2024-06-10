// HamburgerMenu.js
import {React} from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';

const HamburgerMenu = ({ recipes, handleShow }) => {
    return (
        <Navbar expand="lg" bg="light">
        <Container>
            <NavDropdown title="Recipes Lists" id="basic-nav-dropdown">
            {recipes.map((recipe) => (
                <NavDropdown.Item key={recipe.id} href={"/recipes/" + recipe.id}>{recipe.title}</NavDropdown.Item>
            ))}
            </NavDropdown>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link onClick={handleShow}>Grocery List</Nav.Link>
                <Nav.Link href="/addrecipes">Add Your Recipes</Nav.Link>
                <Nav.Link href="/team">Team Page</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default HamburgerMenu;