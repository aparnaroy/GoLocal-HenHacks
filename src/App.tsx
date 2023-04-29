import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Browse } from "./pages/Browse";
import { About } from "./pages/About";
import { AddBusiness } from "./pages/AddBusiness";

function App(): JSX.Element {
    return (
        <>
            <NavBar />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/browse" element={<Browse />} />
                    <Route path="/addbusiness" element={<AddBusiness />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
