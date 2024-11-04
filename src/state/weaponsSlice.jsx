import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('arsenal') ? JSON.parse(localStorage.getItem('arsenal')) : [
    {   
        id: 1,
        name: "palo",
        power: 5,
        price: "",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8RMG5vFR1vQoM82F0liQR3LwI1ujGAS4Uw&s"
    }
]

const weaponsSlice = createSlice({
    name:"weapons",
    initialState,
    reducers: {
        addWeapon: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addWeapon } = weaponsSlice.actions;
export default weaponsSlice.reducer;