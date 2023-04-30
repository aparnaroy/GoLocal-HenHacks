import React, { useEffect } from "react";

const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
        script.async = true;
        document.body.appendChild(script);

        const config = document.createElement("script");
        config.src =
            "https://mediafiles.botpress.cloud/3b5c49de-ae01-4f68-a289-3cb2116aa86b/webchat/config.js";
        config.defer = true;
        document.body.appendChild(config);
    }, []);

    return <div id="webchat"></div>;
};

export default Chatbot;
