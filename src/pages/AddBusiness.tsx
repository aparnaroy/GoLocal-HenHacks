import React from "react";
import FormAdd from "../components/AddForm";

export function AddBusiness() {
    return (
        <div className="App">
            <br></br>
            <div className="App-header">Add Your Business</div>
            <br></br>
            <h3>Are you a Local Business Owner? Add Your Business Here!</h3>
            <FormAdd></FormAdd>
        </div>
    );
}
