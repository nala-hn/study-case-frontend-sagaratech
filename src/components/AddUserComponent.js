import React, { useState } from 'react';

const AddUserComponent = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [instance, setInstance] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');
  const [image, setImage] = useState(null);

  const instances = ['STMIK MARDIRA', 'WIDYATAMA', 'TELKOM', 'POLBAN', 'NOT LISTED'];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!name || !email || !phoneNumber || !instance || !registrationDate) {
      alert('All fields are required!');
    } else {
      const newUser = {
        name,
        email,
        phone_number: phoneNumber,
        instance,
        registration_date: registrationDate
      };

      onSave(newUser);
      alert('Data successfully saved!');
      
      setName('');
      setEmail('');
      setPhoneNumber('');
      setInstance('');
      setRegistrationDate('');
      setImage(null);

      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-xl mb-4">Add New User</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="mb-2 p-2 border rounded w-full"
        />

        {/* Dropdown untuk memilih Instance */}
        <select
          value={instance}
          onChange={(e) => setInstance(e.target.value)}
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
          value={registrationDate}
          onChange={(e) => setRegistrationDate(e.target.value)}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="file"
          onChange={handleImageUpload}
          className="mb-2 p-2 border rounded w-full"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#A51535] text-white px-4 py-2 rounded"
          >
            Save User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserComponent;
