import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addNote } from "../features/NoteSlice";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    noteText: "",
    timeStamp: ""
  });

  const { title, noteText } = formData;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let currentTime = new Date;
    let hour = currentTime.getHours();
    let minutes = currentTime.getMinutes()

    let time = `Time posted: ${hour}:${minutes}`;

    let newNote = { title, noteText, id: uuid(),timeStamp: time  };
    dispatch(addNote(newNote));

    setFormData({
      title: "",
      noteText: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Note Title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <textarea
          type="text"
          placeholder="Note description"
          name="noteText"
          value={noteText}
          onChange={handleChange}
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default StudentForm;
