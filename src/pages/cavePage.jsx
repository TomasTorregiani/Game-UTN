import { useState } from "react";
import "../styles/components/pages/cavePage.css"
import { Link } from "react-router-dom";
import { Slime } from "../components/slime";
import { Troll } from "../components/troll";
import { useSelector } from "react-redux";
import { FaHouse } from "react-icons/fa6";


const CavePage = () => {

    const [pelear, setPelear] = useState("")

    const stats = useSelector(state => state.stats)

    const handlePelear = (e) => {
        setPelear(e.currentTarget.value)
    }

    return (
        <>
            <div className="CavePageDiv">
            <h2>Te encuentras en la cueva</h2>
            <div style={{display:"flex", justifyContent:"center", backgroundColor:"white"}}>
                    <p style={{margin:"10px"}}>HP: {stats.life}</p>
                    <hr />
                    <p style={{margin:"10px"}}>XP: {stats.xp}</p>
                    <hr />
                    <p style={{margin:"10px"}}>GOLD: {stats.gold}</p>
                </div>
                <Link to="/townCenter">
                    <button className="herreriaButton">
                        Volver al centro urbano <FaHouse />
                    </button>
                </Link>
                <div className="flexDiv">
                    <button id="button1" onClick={handlePelear} value="slime">
                        <h4>Luchar contra Slime </h4>
                    </button>
                    <button id="button2" onClick={handlePelear} value="troll">
                        <h4>Luchar contra Troll</h4>
                    </button>
                    <Link to="/townCenter">
                        <button id="button3">
                            <h4> Huir de la cueva</h4>
                        </button>
                    </Link>
                </div>
                <div>
                    {pelear === "slime" ? <Slime/> : pelear === "troll" ? <Troll/> : <h4 style={{textAlign : "center", fontSize: 20, fontWeight: "bolder"}}>La cueva esta repleta de monstruos</h4>}
                </div>
            </div>
        </>
    )
}

export default CavePage;