import { useState } from "react"
import { BuyWeapons } from "../components/buyWeapons"
import { Weapons } from "../components/weapons"
import { Link } from "react-router-dom"
import { FaHouse } from "react-icons/fa6";
import { useSelector } from "react-redux";
import "../styles/components/pages/blackSmith.css"

export const BlackSmithPage = () => {

    const [action, setAction] = useState('')

    const stats = useSelector(state => state.stats)

    const components = {
        buy: BuyWeapons,
        weapons: Weapons
    }

    const handleAction = (e) => {
        setAction(e.currentTarget.value)
    }

    const ComponentToRender = components[action]

    return (
        <div className="blackSmithDiv">
            <h2>Te encuentras en la herreria</h2>
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
            <div style={{display:"flex", justifyContent:"center"}}>
                <button className="herreriaButton" onClick={handleAction} value="buy">Comprar armas</button>
                <button className="herreriaButton" onClick={handleAction} value="weapons">Ver todas mis armas</button>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                {ComponentToRender && <ComponentToRender/>}
            </div>
        </div>
    )
}