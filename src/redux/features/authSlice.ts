import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface initialState_Type {
    _id: string | null,
    email: string | null,
    password: string | null,
    createdAt: string | null,
    updatedAt: string | null,
}

const initialState: initialState_Type = {
    _id: '',
    email: '',
    password: '',
    createdAt: '',
    updatedAt: ''
}


const authSlice = createSlice({
    initialState,
    name: 'adminAuth',
    reducers: {
        setUser: (state, action: PayloadAction<initialState_Type>) => {
            const { _id, createdAt, email, password, updatedAt } = action.payload;
            state._id = _id;
            state.createdAt = createdAt;
            state.email = email;
            state.password = password;
            state.updatedAt = updatedAt
        },
        removeAdmin: (state) => {
            state._id = null;
            state.createdAt = null;
            state.email = null;
            state.password = null;
            state.updatedAt = null;
        },
    }
})

export const { setUser,removeAdmin} = authSlice.actions;
export default authSlice.reducer;