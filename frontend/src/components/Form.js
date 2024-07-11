// TODO: Use bootstrap to style this form

import { useState } from "react";
import {
    useNavigate
} from "react-router-dom";

const homeWorlds = [
    "Tatooine",
    "Alderaan",
    "Naboo",
    "Kashyyyk",
    "Stewjon",
    "Eriadu",
    "Corellia",
    "Rodia",
    "Bestine IV",
    "Dagobah",
    "Trandosha",
    "Socorro",
    "Mon Cala",
    "Chandrila",
    "Sullust",
    "Toydaria",
    "Malastare",
    "Dathomir",
    "Ryloth",
    "Aleen Minor",
    "Vulpter",
    "Troiken",
    "Tund",
    "Haruun Kal",
    "Cerea",
    "Glee Anselm",
    "Iridonia",
    "Tholoth",
    "Iktotch",
    "Quermia",
    "Dorin",
    "Champala",
    "Mirial",
    "Serenno",
    "Concord Dawn",
    "Zolan",
    "Ojom",
    "Skako",
    "Muunilinst",
    "Shili",
    "Kalee",
    "Umbara"
];

const Form = (props) => {
    // TODO: Delete these states once they work
    // const [homeWorld, setHomeWorld] = useState('');
    // const [unitType, setUnitType] = useState('stormtrooper');
    const navigate = useNavigate();

    const handleWorldChange = (event) => {
        props.setHomeWorld(event.target.value);
    };

    const handleUnitChange = (event) => {
        props.setUnitType(event.target.value);
    };

    return (
        <form onSubmit={() => navigate('/predict')}>
            <label for="homeworld">Homeworld </label>
            <input 
                type="text"
                name="homeworld"
                value={props.homeWorld}
                onChange={handleWorldChange}
            >
            </input> 
            <br></br>

            <label for="unit-type">Unit Type </label> 
            <select 
                name="unit-type"
                value={props.unitType}
                onChange={handleUnitChange}
            >
                <option value="stormtrooper">Stormtrooper</option>
                <option value="tie_fighter">TIE Fighter</option>
                <option value="at-st">AT-ST</option>
                <option value="x-wing">X-Wing</option>
                <option value="resistance_soldier">Resistance Soldier</option>
                <option value="at-at">AT-AT</option>
                <option value="tie_silencer">TIE Silencer</option>
                <option value="unknown">Unknown</option>
            </select>
            <br></br>

            <input type="submit"></input>
        </form>
    )
}

export default Form;