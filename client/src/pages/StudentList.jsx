import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContentForm from "../components/ContentComponents/ContentForm";
import ListTable from "../components/ContentComponents/ListTable";

export function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost/projects/SISystem/server/api/get_students.php")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
        setLoading(false);
      });
  }, []);

  const handleEdit = (student) => {
    navigate("/", { state: { editingStudent: student } });
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `http://localhost/projects/SISystem/server/api/delete_student.php?id=${id}`,
        { method: "DELETE" }
      );
      if (!res.ok) {
        const data = await res.json();
        console.error("Delete failed:", data.error);
        return;
      }
      setStudents((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      console.error("Network error during delete:", err);
    }
  };

  return (
    <>
      <ContentForm title={"Student List"}>

        {loading ? (
          <p>Loading students...</p>
        ) : (
          <ListTable students={students} onEdit={handleEdit} onDelete={handleDelete} />
        )}
      </ContentForm>
    </>
  );
}