import React, { useState } from 'react';
import TableComponent from './TableComponent';
import EditComponent from './EditComponent';

const EditForm = () => {
  const [data, setData] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const handleSave = (updatedUser) => {
    setData((prevData) =>
      prevData.map((user) => (user.student_id === updatedUser.student_id ? updatedUser : user))
    );
    setEditingUser(null);
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
  };

  const handleDeleteClick = (studentId) => {
    setData((prevData) => prevData.filter((user) => user.student_id !== studentId));
  };

  const handleCloseEditComponent = () => {
    setEditingUser(null);
  };

  return (
    <div>
      {editingUser && (
        <EditComponent
          user={editingUser}
          onSave={handleSave}
          onCancel={handleCloseEditComponent}
        />
      )}
      <TableComponent
        data={data}
        onEdit={handleEditClick}
        onDelete={handleDeleteClick}
      />
    </div>
  );
};

export default EditForm;
