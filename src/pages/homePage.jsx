import { Link } from "react-router-dom";
import "../styles/components/pages/homePage.css"

const HomePage = () => {
    return(
        <main  className="homePageMain">
            <div>
                    <Link to="/townCenter"><button>Jugar</button></Link>
            </div>
        </main>
    )
}

export default HomePage;