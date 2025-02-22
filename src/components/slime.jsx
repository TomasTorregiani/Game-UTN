import { useDispatch, useSelector } from "react-redux"
import { handleLife, restartStats, addGold } from "../state/statsSlice"
import { modifyMonsterLife, restartMonsterLife } from "../state/monsterStatsSlice"
import "../styles/components/layout/slime.css"
import { useNavigate } from "react-router-dom"

export const Slime = () => {

    const slime = useSelector(state => state.monsters.find(el => el.name === "slime"))
    const weapon = useSelector(state => state.weapons)
    const stats = useSelector(state => state.stats)

    console.log(`Slime: Slime.gold:`, slime.gold);
    

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentWeapon = weapon[weapon.length - 1]

    const calculateDamage = (attackPower) => {
        return Math.floor(Math.random() * attackPower)
    }
    const calculateGold = (monsterGold) => {
        return Math.floor(Math.random() * monsterGold)
    }

    const handleAttack = () => {
        
        const damageGiven = calculateDamage(currentWeapon.power)
        const damageReceive = calculateDamage(slime.power)

        dispatch(handleLife(damageReceive))
        dispatch(modifyMonsterLife({name: slime.name, damage: damageGiven}))

        console.log(`Slime: Le generas ${damageGiven} de daño al slime`);
        console.log(`Slime: El slime te ataca por ${damageReceive}`);
        if(slime.life - damageGiven <= 0){
            console.log(`Slime derrotado, calculando oro...`);
            if(typeof slime.gold === "number" && slime.gold > 0){
                const goldReceive = calculateGold(slime.gold)
                if (!isNaN(goldReceive)) {
                    dispatch(addGold(goldReceive));
                    alert(`Derrotaste al ${slime.name}`);
                    navigate('/townCenter')
                    console.log(`slime: oro recibido`, goldReceive);
                    
                } else {
                    console.error("Slime: Invalid gold received:", goldReceive);
                }
            }
            dispatch(restartMonsterLife({name: slime.name}))
        }

        if(stats.life - damageReceive <= 0){
            alert(`Muriste amigo`)
            dispatch(restartStats())
            navigate('/')
        }
    }

    return (
        <div className="slimeDiv">
            <div className="slimeDiv2">
                <button className="slimeButton" onClick={handleAttack}>Attack</button>
                <button className="slimeButton">Dodge</button>
                <button className="slimeButton">Run</button>
            </div>
            <img  width="350px" height="250px" alt="Slime" src="data:image/jpeg;base64,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"></img>
            <p>HP: {slime.life}</p>
        </div>
    )
}