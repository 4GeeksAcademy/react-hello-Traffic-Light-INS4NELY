import React, { useState } from "react";



const TrafficLights = () => {
    const [color, setColor] = useState("");
    const [isButtonShow, setIsButtonShow] = useState(false);
    const nextColor = () => {
        if (color === "") setColor("red");
        else if (color === "red" && isButtonShow == true) setColor("purple");
        else if (color === "red" ) setColor("green");
        else if (color === "yellow") setColor("red");
        else if (color === "green") setColor("yellow")
        else if (color === "purple") setColor("green")
    }
    return (
    <div className="">
        <div className="baseSemaforo position-absolute top-50 start-50 translate-middle">
            <div className={`redLight ${color === "red" ? "shadowRed" : ""}`} onClick={() => setColor("red")}></div>
            <div className={`yellowLight ${color === "yellow" ? "shadowYellow" : ""}`} onClick={() => setColor("yellow")}></div>
            <div className={`greenLight ${color === "green" ? "shadowGreen" : ""}`} onClick={() => setColor("green")}></div>
            <div className={`purpleLight  ${color === "purple" ? "shadowPurple" : ""} ${isButtonShow ? "d-block" : "d-none"}`} onClick={() => setColor("purple")}></div>
        </div>
        <button className="btn btn-primary position-absolute top-50 start-0 ms-2"  onClick={nextColor}>
            Change the color
        </button>
        <button className="btn btn-primary postionButton"  onClick={() => setIsButtonShow(!isButtonShow)}>
        Adds an extra color 
        </button>
    </div>
    )


}

export default TrafficLights;

