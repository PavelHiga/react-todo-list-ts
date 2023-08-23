import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice.js'
 const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch