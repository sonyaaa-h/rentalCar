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
    isFavourete: [],
    isLoading: false,
    error: null,
};

const handlePending = (state) => {
    state.isLoading = true;
    state.error = false;
};

// const handleRejected = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
// };

const slice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setPage(state, action) {
            state.pagination.page = action.payload;
        },
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        clearFilters: (state) => {
            state.filters = {
                brand: "",
                rentalPrice: "",
                minMileage: "",
                maxMileage: "",
            };
            state.pagination.page = 1;
            state.cars = [];
        },
        addSelected(state, action) {
            if (!state.selected.includes(action.payload)) {
                state.selected.push(action.payload);
            }
        },
        removeSelected(state, action) {
            state.selected = state.selected.filter((id) => id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log(action.payload);

                const page = Number(action.payload.page);
                if (page === 1) {
                    state.cars = action.payload.cars;
                } else {
                    state.cars = [...state.cars, ...action.payload.cars];
                }
                state.pagination.totalPages = action.payload.totalPages;
                state.pagination.page = page;
            })
            .addCase(fetchCars.pending, handlePending);
    },
});

export const {
    setPage,
    setPrice,
    setBrand,
    setMinMileage,
    setMaxMileage,
    clearFilters,
    setFilters,
} = slice.actions;
export const globalReducer = slice.reducer;
