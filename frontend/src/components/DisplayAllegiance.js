import resistance_img from "../assets/resistance.png";
import empire_img from "../assets/empire.png";

const DisplayAllegiance = (props) => {
    console.log(typeof props.data);
    const logo = props.data == "[true]" ? resistance_img : empire_img;
    const allegiance = props.data == "[true]" ? "A PART OF THE RESISTANCE" : "A PART OF THE EMPIRE";
    return (
        <div className="d-inline-flex flex-column justify-content-center">
            <span>It appears that you are...</span>
            <img className="w-100" src={logo} alt="Logo" />
            <span>{allegiance}</span>
        </div>
    )

};

export default DisplayAllegiance;