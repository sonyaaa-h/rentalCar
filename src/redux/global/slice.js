import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
    cars: [],
    isLoading: false,
    error: null,
};

const slice = createSlice({
    name: "global",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cars = action.payload.cars;
        });
    },
});

export const globalReducer = slice.reducer;
