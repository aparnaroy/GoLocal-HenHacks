import React from "react";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import GoLocal from "../Assets/logotransparent.png";

export function NavBar() {
    return (
        <NavbarBs sticky="top" className="navigation">
            <Container>
                <Nav className="me-auto">
                    <img src={GoLocal} alt="GoLocal Logo" height="70px" />
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
                </Nav>
            </Container>
        </NavbarBs>
    );
}

export function DisplayBusinesses(): JSX.Element {
    return <div></div>;
}
