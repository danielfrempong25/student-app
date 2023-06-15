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
    editNote: (state,action)=>{
      state.notes = state.notes.map((note)=>{
        if(note.id === action.payload.id){
          return action.payload.updatedNote;
        }
        return note
      })
    }
  },
});

export const { addNote, deleteNote,editNote } = noteSlice.actions;

export default noteSlice.reducer;
