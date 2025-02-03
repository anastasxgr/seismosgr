import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Quake {
  title: string;
  link:string;
  magnitude: string;
  date: string;
  time: string;
  timeago: string;
}

interface QuakesState {
  quakes: Quake[];
  loading: boolean;
  error: string | null;
}

const initialState: QuakesState = {
  quakes: [],
  loading: false,
  error: null,
};

export const fetchQuakes = createAsyncThunk("quakes/fetchQuakes", async () => {
  const response = await fetch("https://api.alexanasta.gr/quakes.php");
  const resp = await response.json();

  // add timeer before change loaded to false
  await new Promise((resolve) => setTimeout(resolve, 1700));

  return resp.data.list as Quake[];
});

const quakesSlice = createSlice({
  name: "quakes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuakes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchQuakes.fulfilled,
        (state, action: PayloadAction<Quake[]>) => {
          state.loading = false;
          state.quakes = action.payload;
        }
      )
      .addCase(fetchQuakes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch quakes";
      });
  },
});

export const selectQuakes = (state: RootState) => state.quakes.quakes;
export const selectLoading = (state: RootState) => state.quakes.loading;
export const selectError = (state: RootState) => state.quakes.error;

export default quakesSlice.reducer;
