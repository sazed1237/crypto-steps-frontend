import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        removeUser: (state) => {
            state.user = null;
            state.token = null;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser, removeUser, setToken } = userSlice?.actions

export default userSlice?.reducer