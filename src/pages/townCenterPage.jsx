import "../styles/components/pages/townCenter.css"
import { Link } from "react-router-dom";

const TownCenterPage = () => {
    return (
        <div className="townCenterDiv">

            <h2>Te encuentras en el Centro Urbano</h2>
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