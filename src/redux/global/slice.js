import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
    cars: [],
    filters: {
        brand: "",
        rentalPrice: "",
        minMileage: "",
        maxMileage: "",
    },
    pagination: {
        page: 1,
        totalPages: 0,
    },
    isLoading: false,
    error: null,
};

const slice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.pagination.page = action.payload;
        },
        setBrand: (state, action) => {
            state.filters.brand = action.payload;
        },
        setPrice: (state, action) => {
            console.log(action.payload);
            state.filters.rentalPrice = action.payload;
        },
        setMinMileage: (state, action) => {
            state.filters.minMileage = action.payload;
        },
        setMaxMileage: (state, action) => {
            state.filters.maxMileage = action.payload;
        },
        clearFilters: (state) => {
            state.filters = {
                brand: "",
                rentalPrice: "",
                minMileage: "",
                maxMileage: "",
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            state.isLoading = false;
            if (state.pagination.page === 1) {
                state.cars = action.payload.cars;
            } else {
                state.cars = [...state.cars, ...action.payload.cars];
            }
            state.pagination.totalPages = action.payload.totalPages;
            state.pagination.totalCars = action.payload.totalCars;
        });
    },
});

export const { setPage, setPrice, setBrand, setMinMileage, setMaxMileage, clearFilters } =
    slice.actions;
export const globalReducer = slice.reducer;
