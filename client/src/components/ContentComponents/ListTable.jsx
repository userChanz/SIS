import React from 'react';
import TableHeaders from './TableHeaders';

function ListTable({ students = [] }) {
  if (!students.length) {
    return <p className="no-data">No student records found.</p>;
  }

  return (
    <div className="table-container border p-3">
      <table>
        <thead>
          <tr>
            <TableHeaders />
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            // Concatenate name neatly
            const middle = student.middleName ? `${student.middleName}.` : '';
            const ext = student.extensions || '';
            const fullName = `${student.firstName} ${middle} ${student.lastName} ${ext}`.trim();

            return (
              <tr key={student.studentId}>
                <td>{student.studentId}</td>
                <td>{fullName}</td>
                <td>{student.dateOfBirth || '-'}</td>
                <td>{student.age || '-'}</td>
                <td>{student.enrollmentDate || '-'}</td>
                <td>{student.email || '-'}</td>
                <td>{`${student.course} - ${student.year}${student.section}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListTable;