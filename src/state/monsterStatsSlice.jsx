import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        name: "slime",
        life: 200,
        power: 15
    },
    {
        name: "troll",
        life: 500,
        power: 50
    }
]

const monsterStats = createSlice({
    name:"monstersSlice",
    initialState,
    reducers: {
        slimeLifeReducer: (state, action) => {
            const slime = state.find(el => el.name === "slime")
            if(slime){
                slime.life -= action.payload
            }
        },
        trollLifeReducer: (state, action) => {
            const troll = state.find(el => el.name === "troll")
            if(troll){
                troll.life -= action.payload
            }
        }
    }
})

export const { slimeLifeReducer, trollLifeReducer } = monsterStats.actions;
export default monsterStats.reducer;
