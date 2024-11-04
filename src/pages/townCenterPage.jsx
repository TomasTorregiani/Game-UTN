import { useSelector } from "react-redux";
import "../styles/components/pages/townCenter.css"
import { Link } from "react-router-dom";

const TownCenterPage = () => {

    const stats = useSelector(state => state.stats)

    return (
        <div className="townCenterDiv">
            <h2>Te encuentras en el Centro Urbano</h2>
            <div style={{display:"flex", justifyContent:"center", backgroundColor:"white"}}>
                <p style={{margin:"10px"}}>HP: {stats.life}</p>
                <hr />
                <p style={{margin:"10px"}}>XP: {stats.xp}</p>
                <hr />
                <p style={{margin:"10px"}}>GOLD: {stats.gold}</p>
            </div>
            <div>
                <div className="flexDiv">
                    <Link className="townCenterLink" to="/blackSmith">Ir a la Herreria</Link>
                    <Link className="townCenterLink" to="/cueva">Ir a la Cueva</Link>
                    <Link className="townCenterLink" to="/pelearContraDragon">Luchar contra dragon</Link>
                </div>
            </div>
        </div>
    )
}

export default TownCenterPage;