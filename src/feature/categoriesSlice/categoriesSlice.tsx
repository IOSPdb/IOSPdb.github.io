import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: string[] = [
  "Beginner Friendly",
  "Intermediate Skills",
  "Advanced Projects",
  "Featured Projects",
  "Trending Projects",
  "Recommended",
  "Top Rated Projects",
  "Community Picks",
  "Collaboration",
];

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;
