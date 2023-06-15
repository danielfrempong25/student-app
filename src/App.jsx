import "./App.css";
import StudentForm from "./Components/StudentForm";
import StudentsNotes from "./Components/StudentsNotes";

function App() {
  return (
    <div className="grid">
      <div className="gridItem">
        <StudentForm />
      </div>
      <div className="gridItem">
        <StudentsNotes />
      </div>
    </div>
  );
}

export default App;
