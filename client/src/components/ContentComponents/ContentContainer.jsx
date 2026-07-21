// ContentContainer.jsx
import { useState, useEffect } from "react";
import ContainerCardItems from "./ContainerCardItems";

function ContentContainer() {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        extensions: "",
        studentId: "",
        course: "",
        year: "",
        section: "",
        dateOfBirth: "",
        age: "",
        enrollmentDate: "",
        email: "",
    });

    // Derive age whenever dateOfBirth changes
    useEffect(() => {
        if (!formData.dateOfBirth) {
            setFormData((prev) => ({ ...prev, age: "" }));
            return;
        }
        const dob = new Date(formData.dateOfBirth);
        const today = new Date();
        let calculatedAge = today.getFullYear() - dob.getFullYear();
        const hasHadBirthdayThisYear =
            today.getMonth() > dob.getMonth() ||
            (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());
        if (!hasHadBirthdayThisYear) calculatedAge--;
        setFormData((prev) => ({ ...prev, age: calculatedAge }));
    }, [formData.dateOfBirth]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // TODO: send to backend via fetch
    };

    return (
        <div className="container-card border p-2">
            <form onSubmit={handleSubmit}>
                <span><h1>Student Details</h1></span>
                <div className="student-details">
                    <ContainerCardItems formData={formData} handleChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContentContainer;