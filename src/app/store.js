import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../features/NoteSlice";

export const store = configureStore({
  reducer: {
    notes: noteReducer,
  },
});
