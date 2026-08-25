import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
  scrolled: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu(state) {
      state.menuOpen = false;
    },
    setScrolled(state, action) {
      state.scrolled = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, setScrolled } = uiSlice.actions;
export default uiSlice.reducer;
