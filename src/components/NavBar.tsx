import React from "react";
import { Container, Nav, Navbar, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import GoLocal from "../Assets/logotransparent.png";

export function NavBar() {
    return (
        <NavbarBs sticky="top" className="navigation">
            <Container>
                <Navbar.Brand href="#/">
                    <img src={GoLocal} alt="GoLocal Logo" height="130px" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link
                        to="/"
                        as={NavLink}
                        style={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        to="/browse"
                        as={NavLink}
                        style={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        Browse
                    </Nav.Link>
                    <Nav.Link
                        to="/addbusiness"
                        as={NavLink}
                        style={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        Add Business
                    </Nav.Link>
                    <Nav.Link
                        to="/about"
                        as={NavLink}
                        style={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        About
                    </Nav.Link>
                    <Nav.Link
                        to="/discussion"
                        as={NavLink}
                        style={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        Discussion
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    );
}

export function DisplayBusinesses(): JSX.Element {
    return <div></div>;
}
