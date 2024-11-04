import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addWeapon } from "../state/weaponsSlice"
import "../styles/components/pages/blackSmith.css"


export const Daga = () => {

    const dispatch = useDispatch()
    const weapons = useSelector(state => state.weapons)

    useEffect(() => {
        localStorage.setItem('arsenal', JSON.stringify(weapons));
    }, [weapons]);

    const handleComprar = () =>{
        const weaponExist = weapons.find(el => el.id === 2)
        if(weaponExist) {
            alert(`Ya tienes este arma`)
        } else {
            dispatch(addWeapon({
                id: 2,
                name: "daga",
                power: 10,
                price: 100,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-WJb8wpkmzLPm665G3otjDzJD49l-ov24g&s"
            }))
        }
    }
    console.log("weapons", weapons);

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <img height="250px" width="200px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-WJb8wpkmzLPm665G3otjDzJD49l-ov24g&s" alt="daga" />
            <div>
                <p className="weaponsP">Precio: $500</p>
                <p className="weaponsP">Ataque: 20</p>
            </div>
            <button className="herreriaButton" onClick={handleComprar}>Comprar</button>
        </div>
    )
}