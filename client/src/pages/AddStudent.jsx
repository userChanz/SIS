import { useLocation, useNavigate } from "react-router-dom";
import ContentForm from "../components/ContentComponents/ContentForm.jsx"
import ContentContainer from "../components/ContentComponents/ContentContainer.jsx"


export function AddStudent() {
  const location = useLocation();
  const navigate = useNavigate();
  const editingStudent = location.state?.editingStudent ?? null;

  // pass `editingStudent` into your form component,
  // same pre-fill logic we built for ContentContainer earlier

  const handleSaveComplete = () => {
    navigate("/studentList"); // or wherever your list route is
  };

  const handleCancelEdit = () => {
    navigate("/studentList");
  };

  return (
    <ContentForm title={"Add Student"}>
      <ContentContainer title={"Add Student"}
        editingStudent={editingStudent}
        onSaveComplete={handleSaveComplete}
        onCancelEdit={handleCancelEdit}
      />
    </ContentForm>
    
  );
}