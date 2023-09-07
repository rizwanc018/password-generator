import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    gneratedPassword: ""
}

const passwordSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
        setPassword: (state, action) => {
            state.gneratedPassword = action.payload
        }
    }
})

export const { setPassword } = passwordSlice.actions
export default passwordSlice.reducer