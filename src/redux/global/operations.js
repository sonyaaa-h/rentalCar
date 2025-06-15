import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
    baseURL: "https://car-rental-api.goit.global/",
});

export const fetchCars = createAsyncThunk(
    "cars/fetchAll",
    async ({filters,page}, thunkAPI) => {
        try {
            const params = {
                ...filters,
                page 
            }
            const response = await api.get("/cars", {params});
            return {
                cars: response.data.cars,
                totalPages: response.data.totalPages,
                page
            };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);