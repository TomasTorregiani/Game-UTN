import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addWeapon } from "../state/weaponsSlice"
import "../styles/components/pages/blackSmith.css"

export const Espada = () => {

    const dispatch = useDispatch()
    const weapons = useSelector(state => state.weapons)

    useEffect(() => {
        localStorage.setItem('arsenal', JSON.stringify(weapons));
    }, [weapons]);

    const handleComprar = () =>{
        const weaponExist = weapons.find(el => el.id === 4)
        if(weaponExist){
            alert(`Ya tienes este arma`)
        } else{
            dispatch(addWeapon({
                id: 4,
                name: "sword",
                power: 100,
                price: 200,
                img: "https://e7.pngegg.com/pngimages/392/477/png-clipart-silver-longsword-with-black-handle-sword-weapon-arma-bianca-ancient-sword-ancient-egypt-dagger-thumbnail.png"
            }))
        }
    }

    console.log("weapons", weapons);
    
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <img src="https://e7.pngegg.com/pngimages/392/477/png-clipart-silver-longsword-with-black-handle-sword-weapon-arma-bianca-ancient-sword-ancient-egypt-dagger-thumbnail.png" width="200px" height="250px" alt="sword" />
            <div>
                <p className="weaponsP">Precio $3000</p>
                <p className="weaponsP">Ataque: 100</p>
            </div>
            <button className="herreriaButton" onClick={handleComprar}>Comprar</button>
        </div>
    )
}