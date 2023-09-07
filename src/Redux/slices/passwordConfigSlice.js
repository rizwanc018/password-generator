import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    length: 5,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false
}

const configSlice = createSlice({
    name: 'passwordConfig',
    initialState,
    reducers: {
        handleUppercase: state => {
            state.uppercase = !state.uppercase
        },
        handleLowerCase: state => {
            state.lowercase = !state.lowercase
        },
        handleNumber: state => {
            state.numbers = !state.numbers
        },
        handleSymbol: state => {
            state.symbols = !state.symbols
        },
        handleLength: (state, action) => {
            state.length = action.payload
        }
    }
})

export const { handleUppercase, handleLowerCase, handleNumber, handleSymbol, handleLength } = configSlice.actions
export default configSlice.reducer