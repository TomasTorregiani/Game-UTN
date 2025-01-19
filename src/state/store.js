import { configureStore } from "@reduxjs/toolkit";
import statsReducer from "./statsSlice"
import monstersReducer from "./monsterStatsSlice"
import weaponsReducer from "./weaponsSlice"
import userReducer from "./userSlice"

export const store = configureStore({
    reducer:{
        stats: statsReducer,
        monsters: monstersReducer,
        weapons: weaponsReducer,
        user: userReducer
    }
})