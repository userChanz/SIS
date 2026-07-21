import ContentForm from "../components/ContentComponents/ContentLayout"
import ListTable from "../components/ContentComponents/ListTable"

const sampleStudents = [
  {
    studentId: '2026-00123',
    firstName: 'Juan',
    middleName: 'B',
    lastName: 'Dela Cruz',
    extensions: 'Jr.',
    dateOfBirth: '2004-05-15',
    age: 22,
    enrollmentDate: '2026-06-10',
    email: 'juan@example.com',
    course: 'BSIT',
    year: '3',
    section: 'A',
  },
  {
    studentId: '2026-00124',
    firstName: 'Maria',
    middleName: '',
    lastName: 'Santos',
    extensions: '',
    dateOfBirth: '2005-08-20',
    age: 20,
    enrollmentDate: '2026-06-11',
    email: 'maria@example.com',
    course: 'BSBA',
    year: '2',
    section: 'B',
  },
];

export function StudentList() {
    return (
        <>
            <ContentForm title={"Student List"}>
                <div className="search border p-3 mb-3">Search</div>
                <ListTable students={sampleStudents}/>
            </ContentForm>
        </>
    )
}