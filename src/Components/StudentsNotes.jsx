import { useSelector } from "react-redux";
import Note from "./Note";

const StudentsNotes = () => {
  const { notes } = useSelector((state) => state.notes);

  return (
    <div>
      {notes.map((note) => {
        return <Note key={note.id} note={note} />;
      })}
    </div>
  );
};

export default StudentsNotes;
