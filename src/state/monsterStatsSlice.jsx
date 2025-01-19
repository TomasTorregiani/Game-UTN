import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        name: "slime",
        life: 5,
        power: 15,
        gold: 20
    },
    {
        name: "troll",
        life: 1,
        power: 1,
        gold: 40
    }
]

const monsterStats = createSlice({
    name:"monstersSlice",
    initialState,
    reducers: {
        modifyMonsterLife: (state, action) => {
            const { name, damage } = action.payload
            const monster = state.find(el => el.name === name)
            if(monster){
                monster.life -= damage
            }
        },
        restartMonsterLife: (state, action) => {
            const { name } = action.payload
            const initialMonster = initialState.find(el => el.name === name)
            const monster = state.find(el => el.name === name)
            if(monster && initialMonster){
                monster.life = initialMonster.life
            }
        }
    }
})

export const {  modifyMonsterLife, restartMonsterLife } = monsterStats.actions;
export default monsterStats.reducer;
