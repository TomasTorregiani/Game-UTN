import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        value: []
    }

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        addUser: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer;