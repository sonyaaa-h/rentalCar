import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
    baseURL: "https://car-rental-api.goit.global/",
});

export const fetchCars = createAsyncThunk(
    "cars/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await api.get("/cars");
            console.log(response.data);
            
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
