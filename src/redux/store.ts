import { configureStore } from "@reduxjs/toolkit";
import adminReducer from './features/authSlice';
import baseApi from "./api/baseApi";


const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        admin: adminReducer,
    },
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware)
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;