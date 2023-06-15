import { useState } from "react";
import { useDispatch } from "react-redux";
import { editNote } from "../features/NoteSlice";


const EditStudentNote = ({note}) => {
    const [formData, setFormData] = useState({
        title: note.title,
        noteText: note.noteText,
      });
      const [show,setShow] = useState(false);
    
      const { title, noteText } = formData;
      const dispatch = useDispatch();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        let updatedNote = { title, noteText, id: note.id };
        dispatch(editNote({id: note.id, updatedNote}))
        setShow(false)
      };
    
      return (
        <div>
            <button onClick={()=> setShow(!show)}>Edit</button>
{show && (
        <form onSubmit={handleSubmit} style={{maxWidth:"250px"}}>
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
        <button type="submit">save</button>
      </form>
)}
      
        </div>
      );
}

export default EditStudentNote