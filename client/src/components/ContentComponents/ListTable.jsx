import React from 'react';
import TableHeaders from './TableHeaders';

function ListTable({ students = [], onEdit, onDelete }) {
  if (!students.length) {
    return <p className="no-data p-2">No student records found.</p>;
  }

  return (
    <div className="table-container border p-3">
      <table className='table table-lg m-3'>
        <thead>
          <tr>
            <TableHeaders />
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            const middle = student.middle_name ? `${student.middle_name}.` : '';
            const ext = student.extensions || '';
            const fullName = ` ${student.first_name} ${ext} ${middle} ${student.last_name}`.trim();

            return (
              <tr key={student.id} className='border-bottom'>
                <td>{fullName}</td>
                <td>{student.date_of_birth || '-'}</td>
                <td>{student.enrollment_date || '-'}</td>
                <td>{student.email || '-'}</td>
                <td>{`${student.course} - ${student.year}${student.section}`}</td>
                <td>
                  <button className='btn bg-primary text-white p-1 m-1' type="button" onClick={() => onEdit(student)}>
                    Edit
                  </button>
                  <button className='btn bg-danger text-white p-1' type="button" onClick={() => onDelete(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListTable;