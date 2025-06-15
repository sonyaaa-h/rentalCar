import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
    baseURL: "https://car-rental-api.goit.global/",
});

export const fetchCars = createAsyncThunk(
    "cars/fetchAll",
    async ({filters,page}, thunkAPI) => {
        try {
            console.log(filters);
            
            const params = {
                ...filters,
                page 
            }
            const response = await api.get("/cars", {params});
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);