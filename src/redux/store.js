import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { globalReducer } from "./global/slice";

const persistConfig = {
    key: 'user-data',
    version: 1,
    storage,
    whitelist: ["isFavourite"]
}


export const store = configureStore({
    reducer: {
        //reducers
        global: persistReducer(persistConfig, globalReducer)
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store)