import { configureStore } from '@reduxjs/toolkit'
import configReducer from './slices/passwordConfigSlice'
import passwordReducer from './slices/passwordSlice'

const store = configureStore({
    reducer: {
        passwordConfig: configReducer,
        password: passwordReducer
    },
    devTools: true

})

export default store