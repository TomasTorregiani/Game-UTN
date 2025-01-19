import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    life: 100,
    xp:0,
    gold:0,
}

const statsSlice = createSlice({
    name: "lifeStatsSlice",
    initialState,
    reducers:{
        handleLife: (state, action) => {
            state.life -= action.payload;
        },
        handleXp: (state, action) => {
            state.xp += action.payload.xp
        },
        addGold: (state, action) => {
            state.gold += action.payload
        }, 
        substractGold:(state, action) => {
            state.gold -= action.payload
        },
        restartStats: (state) => {
            state.life = 100;
            state.xp = 0;
            state.gold =0;
        }
    }
})

export const { handleLife, handleXp, addGold, restartStats, substractGold } = statsSlice.actions
export default statsSlice.reducer