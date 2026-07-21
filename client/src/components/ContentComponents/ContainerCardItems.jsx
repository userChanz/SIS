// ContainerCardItems.jsx
const cardItems = [
  { id: 'studentId', label: 'Student ID', type: 'text', placeholder: '2026-00123' },
  { id: 'firstName', label: 'First Name', type: 'text', placeholder: 'Juan' },
  { id: 'middleName', label: 'Middle Name', type: 'text', placeholder: 'B' },
  { id: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Dela Cruz' },
  { id: 'extensions', label: 'Extensions', type: 'text', placeholder: 'Jr., Sr., III...' },
  { id: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
  { id: 'age', label: 'Age', type: 'text', readOnly: true }, // Derived from dateOfBirth
  { id: 'enrollmentDate', label: 'Enrollment Date', type: 'date' },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
  {
    id: 'course',
    label: 'Course',
    type: 'select',
    options: ['BSIT', 'BSBA', 'BSHM', 'BSTM']
  },
  {
    id: 'year',
    label: 'Year',
    type: 'select',
    options: ['Irregular', '1', '2', '3', '4']
  },
  {
    id: 'section',
    label: 'Section',
    type: 'select',
    options: ['A', 'B', 'C', 'D']
  },
];

function ContainerCardItems({ formData, handleChange }) {
  return (
    <>
      {cardItems.map((cardItem) => {
        const { id, label, type, placeholder, options, readOnly } = cardItem;

        return (
          <div key={id} className="form-group">
            <label htmlFor={id}>{label}:</label><br></br>

            {type === 'select' ? (
              <select
                id={id}
                name={id}
                value={formData[id]}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select {label}</option>
                {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                value={formData[id]}
                onChange={handleChange}
                readOnly={readOnly}
                required={!readOnly}
              />
            )}
          </div>
        );
      })}
    </>
  );
}

export default ContainerCardItems;