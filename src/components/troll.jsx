import { useDispatch, useSelector } from "react-redux"
import { handleLife, restartStats, addGold } from "../state/statsSlice"
import "../styles/components/layout/troll.css"
import { modifyMonsterLife, restartMonsterLife } from "../state/monsterStatsSlice"
import { useNavigate } from "react-router-dom"

export const Troll = () => {

    const troll = useSelector(state => state.monsters.find(monster => monster.name === "troll"))
    const weapon = useSelector(state => state.weapons)
    const stats = useSelector(state => state. stats)

    console.log(`Troll: Troll.gold:`, troll.gold);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const currentWeapon = weapon[weapon.length - 1]

    const calculateDamage = (attackPower) => {
        return Math.floor(Math.random() * attackPower)
    }
    const calculateGold = (monsterGold) => {
        return Math.floor(Math.random() * monsterGold + 20)
    }

    const handleAttack = () => {

        const damageGiven = calculateDamage(currentWeapon.power)
        const damageReceive = calculateDamage(troll.power)

        dispatch(handleLife(damageReceive))
        dispatch(modifyMonsterLife({name: troll.name, damage: damageGiven}))

        console.log(`Le generas ${damageGiven} de daño al troll`);
        console.log(`El troll te ataca por ${damageReceive}`);

        if(troll.life - damageGiven <= 0){
                    console.log(`Troll derrotado, calculando oro...`);
                    if(typeof troll.gold === "number" && troll.gold > 0){
                        const goldReceive = calculateGold(troll.gold)
                        if (!isNaN(goldReceive)) {
                            dispatch(addGold(goldReceive));
                            alert(`Derrotaste al ${troll.name}`);
                            navigate('/townCenter')
                            console.log(`Troll: oro recibido`, goldReceive);
                            
                        } else {
                            console.error("Troll: Invalid gold received:", goldReceive);
                        }
                    }
                    dispatch(restartMonsterLife({name: troll.name}))
                }
                if(stats.life - damageReceive <= 0){
                    alert(`Muriste amigo`)
                    dispatch(restartStats())
                    navigate('/')
                }
    }


    return (
        <div className="trollDiv">
            <div className="trollDiv2">
                <button className="trollButton" onClick={handleAttack}>Attack</button>
                <button className="trollButton">Dodge</button>
                <button className="trollButton">Run</button>
            </div>
            <img src="https://pics.craiyon.com/2023-07-16/1d21725df8eb402c86ae2917bf7c8da8.webp" alt="monster" width="350px" height="250px"/>
            <p>HP: {troll.life}</p>
        </div>
    )
};