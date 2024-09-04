import React, { useState, useEffect } from 'react';

const EditComponent = ({ item, onSave, onCancel }) => {
  const [formData, setFormData] = useState(item);
  
  const instances = ['STMIK MARDIRA', 'WIDYATAMA', 'TELKOM', 'POLBAN', 'NOT LISTED'];

  useEffect(() => {
    setFormData(item);
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSave(formData);
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-xl mb-4">Editem</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mb-2 p-2 border rounded w-full"
          />
          <input
             name="email"
             value={formData.email}
             onChange={handleChange}
            className="mb-2 p-2 border rounded w-full"
          />
          <input
             name="phone_number"
             value={formData.phone_number}
             onChange={handleChange}
            className="mb-2 p-2 border rounded w-full"
          />
          <select
            value={formData.instances}
            onChange={handleChange}
            className="mb-2 p-2 border rounded w-full"
          >
            <option value="" disabled>Select Instance</option>
            {instances.map((inst, index) => (
              <option key={index} value={inst}>
                {inst}
              </option>
            ))}
          </select>
          <input
            type="date"
            name="registration_date"
            value={formData.registration_date}
            onChange={handleChange}
            className="mb-2 p-2 border rounded w-full"
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-[#A51535] text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditComponent;
