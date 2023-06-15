/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteNote } from "../features/NoteSlice";
import EditStudentNote from "./EditStudentNote";

const Note = ({ note }) => {
  const dispatch = useDispatch();

  return (
    <div className="card" style={{ margin: "8px" }}>
      <p>{note.timeStamp}</p>
      <p>Title: {note.title}</p>
      <p>Note description : {note.noteText}</p>
      <EditStudentNote note={note}/>
      <button onClick={() => dispatch(deleteNote(note.id))}>delete</button>
    </div>
  );
};

export default Note;
