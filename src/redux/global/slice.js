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
    isFavourite: [],
    isLoading: false,
    error: null,
};

const handlePending = (state) => {
    state.isLoading = true;
    state.error = false;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

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
        toggleFavourite(state, action) {
            const id = action.payload;
            if (state.isFavourite.includes(id)) {
                state.isFavourite = state.isFavourite.filter((favId) => favId !== id);
            } else {
                state.isFavourite.push(id);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.isLoading = false;

                if (state.pagination.page === 1) {
                    state.cars = action.payload.cars;
                } else {
                    state.cars = [...state.cars, ...action.payload.cars];
                }
                state.pagination.totalPages = action.payload.totalPages;
            })
            .addCase(fetchCars.pending, handlePending)
            .addCase(fetchCars.rejected, handleRejected);
    },
});

export const { setPage, clearFilters, setFilters, toggleFavourite } =
    slice.actions;
export const globalReducer = slice.reducer;
