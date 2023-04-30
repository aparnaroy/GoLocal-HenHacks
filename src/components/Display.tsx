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
import { Card, Col, Nav, Row } from "react-bootstrap";
import { Discussion2 } from "../pages/Discussion2";

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
    setItems;

    function showDiscussion(item: Business) {
        if (window.location.href.endsWith("discussion") && item) {
            return (
                <div>
                    <Discussion2 business={item}></Discussion2>
                </div>
            );
        }
    }

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
                                    {showDiscussion(item)}
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
