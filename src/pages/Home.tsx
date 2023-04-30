import React from "react";
import GoLocal from "../Assets/logotransparent.png";
import Chatbot from "../components/Chatbot";

export function Home() {
    return (
        <div className="App">
            <br></br>
            <div className="App-header2">
                <img src={GoLocal} alt="GoLocal Logo" height="220px" />
            </div>
            <br></br>
            <img
                src="https://www.nist.gov/sites/default/files/images/2020/05/07/shutterstock_254975995.jpg"
                alt="GoLocal businesses"
                height="800px"
            />
            <br></br>
            <br></br>
            <h3>
                Want to support your community while also getting the products
                and services you need? Look no further!
            </h3>
            <br></br>
            <h1>
                Here at GoLocal, we collaborate with local companies to unite
                communities!
            </h1>
            <br></br>
            <br></br>
            <Chatbot />
            <hr></hr>
        </div>
    );
}
