import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getJobs = createAsyncThunk(
    'jobs/getJobs',
    async () => {
        const { data } = await api.fetchJobs();

        return data;
    }
);

export const createJob = createAsyncThunk(
    'jobs/createJob',
    async job => {
        const { data } = await api.createJob(job);

        return data;
    }
);

export const jobSlice = createSlice({
    name: "jobs",
    initialState: [],
    extraReducers: {
        [getJobs.fulfilled] : (state, action) => {
          return  state = action.payload;
        },
        [createJob.fulfilled] : (state, action) => {
           return state = [...state, action.payload];
        }
    }
});

export default jobSlice.reducer;


