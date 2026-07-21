

function TableHeaders() {

  const headers = [
    {id:'studentId', label:'Student ID' },
    {id:'fullName', label:'Full Name' },
    {id:'dateOfBirth', label:'Date of Birth' },
    {id:'age', label:'Age' },
    {id:'enrollmentDate', label:'Date of Enrollment' },
    {id:'email', label:'Email' },
    {id:'class', label:'Class' }
    ]

    return (
        <>
            {headers.map((header) => {
                const {id, label} = header
                return(
                    <th key={id} id={id}>{label}</th>
                )
            })}       
        </>
    )
}

export default TableHeaders