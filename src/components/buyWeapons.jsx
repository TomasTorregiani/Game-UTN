import { useState } from "react"
import { Daga } from "./daga"
import { Hacha } from "./hacha"
import { Espada } from "./espada"
import "../styles/components/pages/blackSmith.css"

export const BuyWeapons = () => {

    const [buy, setBuy] = useState('')

    const handleBuy = (e) => {
        setBuy(e.currentTarget.value)
    }

    const components = {
        daga: Daga,
        hacha: Hacha,
        espada: Espada
    }

    const ComponentToRender = components[buy]

    return(
        <div>
            <button className="herreriaButton" onClick={handleBuy} value="daga">Comprar daga</button>
            <button className="herreriaButton" onClick={handleBuy} value="hacha">Comprar hacha</button>
            <button className="herreriaButton" onClick={handleBuy} value="espada">Comprar espada</button>
            {ComponentToRender && <ComponentToRender/>}
        </div>
    )
}