import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    email: '',
    fullName: '',
    accessToken: '',
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.fullName = action.payload.fullName;
            state.accessToken = action.payload.accessToken;
        },
        clearUser: (state) => {
            state.id = '';
            state.email = '';
            state.fullName = '';
            state.accessToken = '';
        }
    }
})

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
