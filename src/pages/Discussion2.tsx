import React from "react";
import { Business } from "../Assets/instances";

interface DiscussionProps {
    business: Business | null;
}

export function Discussion2({ business }: DiscussionProps) {
    function check() {
        if (business) {
            return business.name;
        }
    }
    return (
        <div className="App">
            <br></br>
            <div className="App-header">Discussion</div>
            <br></br>
            <div>
                <h1>Green Box Kitchen 2</h1>
                {check()}
            </div>
            <br></br>
        </div>
    );
}
