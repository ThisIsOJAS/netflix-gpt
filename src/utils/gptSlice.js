import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt slice",
  initialState: {
    showGptSearch: false,
  },

  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
