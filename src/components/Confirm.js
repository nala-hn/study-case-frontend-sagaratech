import React from 'react';

const Confirm = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-lg mb-4">{message}</h2>
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="bg-[#A51535] text-white px-4 py-2 rounded"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
