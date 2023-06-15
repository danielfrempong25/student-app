/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteNote } from "../features/NoteSlice";

const Note = ({ note }) => {
  const dispatch = useDispatch();

  return (
    <div className="card" style={{ margin: "8px" }}>
      <p>Title: {note.title}</p>
      <p>Note description : {note.noteTitle}</p>
      <button onClick={() => dispatch(deleteNote(note.id))}>delete</button>
    </div>
  );
};

export default Note;
