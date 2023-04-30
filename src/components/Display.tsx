import React from "react";
import {
    TerraCafeGrill,
    GreenBoxKitchen,
    Business,
    Evangelinas,
    ArtzScape,
    StudioOnMarket,
    SqueezeBox,
    PureYoga,
    MedSpa,
    HeavenAndHealth,
    CoralCove,
    Bloom,
    GinghamGrace,
    KingCreative,
    LCPhotography,
    SHCreativeStudio,
    PopInPops,
    WaltsChicken,
    BooksAndBagels,
    BrewHaha,
    IgniteFitness,
    Heirloom,
    GreenbankAndPhilips,
    MercuryCafe
} from "../Assets/instances";
import { Card, Col, Nav, Row } from "react-bootstrap";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { AddBusinessForm } from "./AddBusiness";

export function DisplayBusinesses(): JSX.Element {
    const [items, setItems] = useSessionStorage<Business[]>("all-items", [
        TerraCafeGrill,
        GreenBoxKitchen,
        Evangelinas,
        ArtzScape,
        SqueezeBox,
        StudioOnMarket,
        PureYoga,
        MedSpa,
        HeavenAndHealth,
        CoralCove,
        Bloom,
        GinghamGrace,
        KingCreative,
        LCPhotography,
        SHCreativeStudio,
        PopInPops,
        WaltsChicken,
        BooksAndBagels,
        BrewHaha,
        IgniteFitness,
        Heirloom,
        GreenbankAndPhilips,
        MercuryCafe
    ]);

    const handleAddBusiness = (business: Business) => {
        setItems([...items, business]);
    };

    function displayBusinesses() {
        if (window.location.href.endsWith("browse")) {
            return (
                <div className="flex-container">
                    <Row sm={1} md={3}>
                        {items.map((item) => {
                            return (
                                <Col key={item.name}>
                                    <Card key={item.name}>
                                        <Card.Img
                                            variant="top"
                                            src={item.image}
                                            style={{ objectFit: "cover" }}
                                            height="200px"
                                            width="100px"
                                        ></Card.Img>
                                        <Card.Body>
                                            <Card.Title>
                                                <span>
                                                    <Nav.Link href="#/discussion">
                                                        {item.name}
                                                    </Nav.Link>
                                                </span>
                                            </Card.Title>
                                            <span>{item.description}</span>
                                            <span>{item.category}</span>
                                            {displayBusiness(item)}
                                        </Card.Body>
                                    </Card>
                                    <br></br>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            );
        }
    }

    function displayForm() {
        if (window.location.href.endsWith("addbusiness")) {
            return (
                <div className="App">
                    <br></br>
                    <AddBusinessForm
                        onSubmit={handleAddBusiness}
                    ></AddBusinessForm>
                    <br></br>
                </div>
            );
        }
    }

    function displayBusiness(business: Business) {
        if (window.location.href.endsWith("discussion")) {
            return (
                <div className="App">
                    <br></br>
                    <div className="App-header">Discussion</div>
                    <br></br>
                    <div>
                        <h1 className="App-header3">Green bk Kitchen</h1>
                        <img
                            src={GreenBoxKitchen.image}
                            alt="GoLocal Logo"
                            height="400px"
                        />
                        {business.name}
                    </div>
                </div>
            );
        }
    }

    return (
        <div>
            {displayForm()}
            {displayBusinesses()}
            <br></br>
            <hr></hr>
        </div>
    );
}
