// TODO: Use bootstrap to style this form

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

const Form = () => {
    return (
        <form>
            <label for="homeworld">Homeworld </label>
            <input name="homeworld"></input> <br></br>

            <label for="unit-type">Unit Type </label> 
            <select name="unit-type">
                <option value="stormtrooper">Stormtrooper</option>
                <option value="tie_fighter">TIE Fighter</option>
                <option value="at-st">AT-ST</option>
                <option value="x-wing">X-Wing</option>
                <option value="resistance_soldier">Resistance Soldier</option>
                <option value="at-at">AT-AT</option>
                <option value="tie_silencer">TIE Silencer</option>
                <option value="unknown">Unknown</option>
            </select> <br></br>

            <input type="submit"></input>
        </form>
    )
}

export default Form;