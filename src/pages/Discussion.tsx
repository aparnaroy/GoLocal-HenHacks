import React from "react";
import { Discussion2 } from "./Discussion2";

export function Discussion() {
    return (
        <div className="App">
            <br></br>
            <div className="App-header">Discussion</div>
            <br></br>
            <div>
                <h1>Green Box Kitchen</h1>
                <Discussion2 business={null}></Discussion2>
            </div>
            <br></br>
        </div>
    );
}
