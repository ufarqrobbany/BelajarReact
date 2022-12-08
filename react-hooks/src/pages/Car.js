import { useState } from "react";

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue" }
        });
    }

    const updateYear = () => {
        setCar(previousState => {
            return { ...previousState, year: "1998" }
        });
    }

    return (
        <>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button onClick={updateColor}>change color</button>
            <button onClick={updateYear}>change year</button>
        </>
    );
}

export default Car;