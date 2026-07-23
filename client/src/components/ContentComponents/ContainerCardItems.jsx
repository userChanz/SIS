// ContainerCardItems.jsx
const cardItems = [
  { id: 'firstName', label: 'First Name', type: 'text', placeholder: 'Juan', required: true },
  { id: 'middleName', label: 'Middle Name', type: 'text', placeholder: 'B', required: false },
  { id: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Dela Cruz', required: true },
  { id: 'extensions', label: 'Extensions', type: 'text', placeholder: 'Jr., Sr., III...', required: false },
  { id: 'dateOfBirth', label: 'Date of Birth', type: 'date', required: true },
  { id: 'enrollmentDate', label: 'Enrollment Date', type: 'date', required: true },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@example.com', required: true },
  {
    id: 'course',
    label: 'Course',
    type: 'select',
    options: ['BSIT', 'BSBA', 'BSHM', 'BSTM'],
    required: true
  },
  {
    id: 'year',
    label: 'Year',
    type: 'select',
    options: ['1', '2', '3', '4'],
    required: true
  },
  {
    id: 'section',
    label: 'Section',
    type: 'select',
    options: ['A', 'B', 'C', 'D'],
    required: true
  },
];

function ContainerCardItems({ formData, handleChange, errors = {} }) {
  return (
    <>
      {cardItems.map((cardItem) => {
        const { id, label, type, placeholder, options, readOnly, required } = cardItem;
        const fieldError = errors[id];

        return (
          <div key={id} className="form-group p-2">
            <label className='m-1' htmlFor={id}>{label}:</label><br></br>

            {type === 'select' ? (
              <select
                id={id}
                name={id}
                value={formData[id]}
                onChange={handleChange}
                required={required}
                aria-invalid={!!fieldError}
              >
                <option value="" disabled>Select {label}</option>
                {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input className="p-1"
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                value={formData[id]}
                onChange={handleChange}
                readOnly={readOnly}
                required={required}
                aria-invalid={!!fieldError}
              />
            )}

            {fieldError && <span className="error-text">{fieldError}</span>}
          </div>
        );
      })}
    </>
  );
}

export default ContainerCardItems;