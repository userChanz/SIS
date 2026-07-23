// ContentContainer.jsx
import { useState, useEffect } from "react";
import ContainerCardItems from "./ContainerCardItems";

const emptyForm = {
    firstName: "",
    middleName: "",
    lastName: "",
    extensions: "",
    course: "",
    year: "",
    section: "",
    dateOfBirth: "",
    age: "",
    enrollmentDate: "",
    email: "",
};

function ContentContainer({ editingStudent = null, onSaveComplete, onCancelEdit }) {
    const [formData, setFormData] = useState(emptyForm);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const isEditing = editingStudent !== null;

    // Pre-fill form when an edit target is passed in
    useEffect(() => {
        if (editingStudent) {
            setFormData({
                firstName: editingStudent.first_name || "",
                middleName: editingStudent.middle_name || "",
                lastName: editingStudent.last_name || "",
                extensions: editingStudent.extensions || "",
                course: editingStudent.course || "",
                year: String(editingStudent.year || ""),
                section: editingStudent.section || "",
                dateOfBirth: editingStudent.date_of_birth || "",
                age: "",
                enrollmentDate: editingStudent.enrollment_date || "",
                email: editingStudent.email || "",
            });
            setErrors({});
        } else {
            setFormData(emptyForm);
        }
    }, [editingStudent]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    function validate(data) {
        const errs = {};
        if (!data.firstName.trim()) errs.firstName = "First name is required.";
        if (!data.lastName.trim()) errs.lastName = "Last name is required.";
        if (!data.email.trim()) {
            errs.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            errs.email = "Invalid email format.";
        }
        if (!data.dateOfBirth) {
            errs.dateOfBirth = "Date of birth is required.";
        } else if (new Date(data.dateOfBirth) > new Date()) {
            errs.dateOfBirth = "Date of birth cannot be in the future.";
        }
        if (!data.enrollmentDate) errs.enrollmentDate = "Enrollment date is required.";
        if (!data.course.trim()) errs.course = "Course is required.";
        if (!data.year) {
            errs.year = "Year level is required.";
        } else if (isNaN(Number(data.year)) || Number(data.year) < 1) {
            errs.year = "Year must be a valid number.";
        }
        if (!data.section.trim()) errs.section = "Section is required.";
        return errs;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate(formData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        const { age, ...rest } = formData;
        const payload = { ...rest, year: Number(rest.year) };

        const url = isEditing
            ? `http://localhost/projects/SISystem/server/api/add_student.php?id=${editingStudent.id}`
            : "http://localhost/projects/SISystem/server/api/add_student.php";
        const method = isEditing ? "PUT" : "POST";

        setSubmitting(true);
        try {
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await res.json();

            if (!res.ok) {
                setErrors((prev) => ({ ...prev, backend: data.error || "Submission failed." }));
                return;
            }

            setFormData(emptyForm);
            onSaveComplete?.();
        } catch (err) {
            console.error("Network error:", err);
            setErrors((prev) => ({ ...prev, backend: "Could not reach the server." }));
        } finally {
            setSubmitting(false);
        }
    };

    const handleCancel = () => {
        setFormData(emptyForm);
        setErrors({});
        onCancelEdit?.();
    };

    return (
        <div className="container-card border p-3 ">
            <form onSubmit={handleSubmit}>
                <span><h1>{isEditing ? "Edit Student" : "Student Details"}</h1></span>
                <div className="student-details">
                    <ContainerCardItems formData={formData} handleChange={handleChange} errors={errors} />
                </div>
                {errors.backend && <p className="error-text">{errors.backend}</p>}
                <button className="btn m-2  p-1 bg-success text-white" type="submit" disabled={submitting}>
                    {submitting ? "Saving..." : isEditing ? "Update" : "Submit"}
                </button>
                {isEditing && (
                    <button className="btn m-2  p-1 bg-warning" type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                )}
            </form>
        </div>
    );
}

export default ContentContainer;