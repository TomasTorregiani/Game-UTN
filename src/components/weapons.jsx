import { useSelector } from "react-redux"


export const Weapons = () => {

    const weapons = useSelector(state => state.weapons)

    console.log("weapons", weapons);
    
    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
            {weapons.map(weapon => (<div style={{margin:"0px 40px"}} key={weapon.id}>
                                        <h3>{weapon.name.toUpperCase()}</h3>
                                        <img style={{width:"200px", height:"250px"}} src={weapon.img} alt={weapon.name} />
                                        
                                    </div>))}
        </div>
    )
}