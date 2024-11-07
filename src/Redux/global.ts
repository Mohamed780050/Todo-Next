import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  refetch: 0,
};
export const global = createSlice({
  name: "global",
  initialState,
  reducers: {
    changeRefetch: (state) => {
      state.refetch = state.refetch + 1;
    },
  },
});

export const { changeRefetch } = global.actions;
export default global.reducer;
