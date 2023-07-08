import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import cartSlceReducer from './slices/cartSlice';
import authSliceReducer from "./slices/authSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSlceReducer,
        auth: authSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat
        (apiSlice.middleware),
    devTools: true,
});

export default store;