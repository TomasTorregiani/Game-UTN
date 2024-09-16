import { useState } from "react";
import "../styles/components/pages/cavePage.css"
import { Link } from "react-router-dom";
import { Slime } from "../components/slime";
import { Monstruo } from "../components/monstruo";
import { PiPersonSimpleRunFill } from "react-icons/pi";



const CavePage = () => {

    const [pelear, setPelear] = useState("")

    const handlePelear = (e) => {
        setPelear(e.currentTarget.value)
    }

    return (
        <div className="CavePageDiv">
            <h2>Te encuentras en la cueva</h2>
            <div className="flexDiv">
                <button id="button1" className="caveButton" onClick={handlePelear} value="slime">
                    <h4>Luchar contra Slime </h4>
                </button>
                <button id="button2" className="caveButton" onClick={handlePelear} value="monstruo">
                    <h4>Luchar contra monstruo</h4>
                </button>
                <Link to="/townCenter">
                    <button id="button3" className="caveButton">    
                        <h4> Huir de la cueva</h4>
                    </button></Link>
            </div>
            <div>
                {pelear === "slime" ? <Slime/> : pelear === "monstruo" ? <Monstruo/> : <h4 style={{textAlign : "center", fontSize: 20, fontWeight: "bolder"}}>La cueva esta repleta de monstruos</h4>}
            </div>
        </div>
    )
}

export default CavePage;