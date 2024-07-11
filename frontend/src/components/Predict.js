import { useState } from "react";

const PORT_NUMBER = 5000;
const END_POINT = `http://localhost:${PORT_NUMBER}/`;

const FetchResults = async (body, setData) => {
    try {
        const response = await fetch(END_POINT + "api/predict", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(body),
        });

        if (!response.ok) 
            throw new Error(`Response status: ${response.status}`);

        const json = await response.json();
        setData(json);
    } catch (e) {
        console.error("Error fetching from FetchResults: ", e);
    }
};

const Predict = () => {

    const [data, setData] = useState({});

    // TODO: Create a Form component to generate a user-defined body 

    FetchResults(body, setData)

    return (
        <>
            data
        </>
    )
};

export default Predict;