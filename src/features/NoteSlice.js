import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => {
        if (note.id !== action.payload) {
          return note;
        }
      });
    },
  },
});

export const { addNote, deleteNote } = noteSlice.actions;

export default noteSlice.reducer;
