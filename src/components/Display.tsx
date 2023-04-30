import React, { useState, useEffect } from "react";
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

export function useSessionStorage<T>(key: string, initialValue: T | (() => T)) {
    const [value, setValue] = useState<T>(() => {
        const jsonValue = sessionStorage.getItem(key);
        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof initialValue === "function") {
            return initialValue as () => T;
        } else {
            return initialValue;
        }
    });

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as [typeof value, typeof setValue];
}

export function SortingButton(): JSX.Element {
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
    let printed = DisplayBusinesses(items);
    const [sort, setSort] = useState<string>("");
    function updateSorting(event: React.ChangeEvent<HTMLSelectElement>) {
        setSort(event.target.value);
    }
    const sortedList = items.filter((item) => item.category.includes(sort));
    printed = DisplayBusinesses(sortedList);
    return (
        <div>
            <div>
                <span style={{ justifyContent: "left" }}>Sort By: </span>
            </div>
            <div>
                <Form.Select
                    value={sort}
                    onChange={updateSorting}
                    style={{ width: "350px", height: "70px", fontSize: "30px" }}
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
                <br></br>
                {printed}
            </div>
        </div>
    );
}

export function DisplayBusinesses(items: Business[]): JSX.Element {
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
