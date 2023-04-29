import React, { useState, useEffect } from "react";
import {
    TerraCafeGrill,
    GreenBoxKitchen,
    Business,
    Evangelinas,
    ArtzScape,
    StudioOnMarket,
    SqueezeBox
} from "../Assets/instances";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

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
        StudioOnMarket
    ]);
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
                                ></Card.Img>
                                <Card.Body>
                                    <Card.Title>
                                        <span>{item.name}</span>
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
