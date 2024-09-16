import { useState } from "react"
import "../styles/components/pages/blackSmith.css"
import { Daga } from "../components/daga"
import { Espada } from "../components/espada"
import { Hacha } from "../components/hacha"
import { Link } from "react-router-dom"
import { FaHouse } from "react-icons/fa6";

export const BlackSmithPage = () => {

    const [accion, setAccion] = useState("")
    const [comprar, setComprar] = useState("")

    const handleAccion = (e) => {
        setAccion(e.currentTarget.value)
    }

    const handleComprar = (e) => {
        setComprar(e.currentTarget.value)
    }
    const components = {
        daga : Daga,
        hacha: Hacha,
        espada: Espada
    }

    const ComponentToRender = components[comprar]


    return (
        <div className="blackSmithDiv">
            
                <h2>Te encuentras en la herreria</h2>
                <Link to="/townCenter"><button className="herreriaButton">Volver al centro urbano <FaHouse />
                </button></Link>
            
            {accion === "vender" ? <div>  
                                        <div  className="flexContainer">
                                            <p className="centrarP">Vender armas</p>
                                        </div>
                                        <div  className="flexDiv">
                                            <button className="herreriaButton">Vender daga</button>
                                            <button className="herreriaButton">Vender hacha</button>
                                            <button className="herreriaButton">Vender espada</button> 
                                            <button className="herreriaButton2" onClick={handleAccion} value="comprar">Comprar arma</button>
                                        </div>                        
                                    </div> 
                                :  accion === "comprar" ?   <div>
                                                                <div  className="flexContainer">
                                                                    <p className="centrarP">Comprar armas</p>
                                                                </div>
                                                                <div  className="flexDiv">
                                                                    <button className="herreriaButton" onClick={handleComprar} value="daga">Comprar daga</button>
                                                                    <button className="herreriaButton" onClick={handleComprar} value="hacha">Comprar hacha</button>
                                                                    <button className="herreriaButton" onClick={handleComprar} value="espada">Comprar espada</button>
                                                                    <button className="herreriaButton2" onClick={handleAccion} value="vender">Vender arma</button>
                                                                    {ComponentToRender && <ComponentToRender/>}
                                                                </div>
                                                                
                                                            </div>
                                                            :   <div>
                                                                <div className="flexContainer">
                                                                    <p className="centrarP">Puedes comprar armas nuevas o vender armas antiguas</p>
                                                                </div>  
                                                                    <div  className="flexDiv">
                                                                        <button className="herreriaButton" onClick={handleAccion} value="comprar">Comprar arma</button>
                                                                        <button className="herreriaButton" onClick={handleAccion} value="vender">Vender arma</button>
                                                                    </div>
                                                                    
                                                                </div>
                                }
                                            <div>

            </div>
        </div>
        
    )
}