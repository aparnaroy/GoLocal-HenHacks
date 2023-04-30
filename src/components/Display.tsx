import React, { useState } from "react";
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
import { Card, Col, Nav, Row, Form } from "react-bootstrap";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { AddBusinessForm } from "./AddBusiness";

export function DisplayBusinesses(): JSX.Element {
    const masterList: Business[] = [
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
    ];
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

    const [sort, setSort] = useState<string>("");
    function updateSorting(event: React.ChangeEvent<HTMLSelectElement>) {
        setSort(event.target.value);
        const sortedList = masterList.filter((item) =>
            item.category.includes(sort)
        );
        setItems(sortedList);
    }
    const sortedList = masterList.filter((item) =>
        item.category.includes(sort)
    );
    const toPrint = displayBusinesses(sortedList);
    function sortBusinesses() {
        if (window.location.href.endsWith("browse")) {
            return (
                <div>
                    <Form.Select
                        value={sort}
                        onChange={updateSorting}
                        style={{
                            width: "350px",
                            height: "70px",
                            fontSize: "25px"
                        }}
                    >
                        <option>Restaurant</option>
                        <option>Arts and Entertainment</option>
                        <option>Health and Wellness</option>
                        <option>Retail</option>
                        <option>Creative Services</option>
                        <option>Black Owned</option>
                        <option>Women Owned</option>
                        <option>LGBTQ+ Owned</option>
                    </Form.Select>
                    {toPrint}
                </div>
            );
        }
    }
    function displayBusinesses(itemList: Business[]) {
        if (window.location.href.endsWith("browse")) {
            return (
                <div>
                    <div className="flex-container">
                        <Row sm={1} md={3}>
                            {itemList.map((item) => {
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
                                                <br></br>
                                                <span>•{item.category}</span>
                                            </Card.Body>
                                        </Card>
                                        <br></br>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
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

    return (
        <div>
            {displayForm()}
            {sortBusinesses()}
            <br></br>
            <hr></hr>
        </div>
    );
}
