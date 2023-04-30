import React from "react";
import { DisplayBusinesses } from "../components/Display";
export function Browse() {
    function displayTitle() {
        if (window.location.href.endsWith("browse")) {
            return (
                <div className="App">
                    <br></br>
                    <div className="App-header">Browse Local Businesses</div>

                    <br></br>
                </div>
            );
        }
    }
    return (
        <div className="App">
            {displayTitle()}
            <DisplayBusinesses></DisplayBusinesses>
        </div>
    );
}
