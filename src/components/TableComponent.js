import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Delete from '../assets/img/delete.png';
import edit from '../assets/img/edit.png';

const TableComponent = ({ data, onEdit, onDelete }) => {
  const dataPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const sortedData = React.useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const totalPages = Math.ceil(sortedData.length / dataPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleEditClick = (item) => {
    onEdit(item);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-sm border-y border-gray-300">
          <thead>
            <tr className="text-gray-500">
              <th className="py-2 px-4 border-b cursor-pointer" onClick={() => requestSort('image')}>
                Image
                {sortConfig.key === 'image' && (sortConfig.direction === 'ascending' ? (
                  <ChevronUpIcon className="w-4 h-4 inline-block ml-2" />
                ) : (
                  <ChevronDownIcon className="w-4 h-4 inline-block ml-2" />
                ))}
              </th>
              <th className="py-2 px-4 border-b cursor-pointer" onClick={() => requestSort('name')}>
                Name
                {sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? (
                  <ChevronUpIcon className="w-4 h-4 inline-block ml-2" />
                ) : (
                  <ChevronDownIcon className="w-4 h-4 inline-block ml-2" />
                ))}
              </th>
              <th className="py-2 px-4 border-b cursor-pointer" onClick={() => requestSort('email')}>
                Email Address
                {sortConfig.key === 'email' && (sortConfig.direction === 'ascending' ? (
                  <ChevronUpIcon className="w-4 h-4 inline-block ml-2" />
                ) : (
                  <ChevronDownIcon className="w-4 h-4 inline-block ml-2" />
                ))}
              </th>
              <th className="py-2 px-4 border-b cursor-pointer" onClick={() => requestSort('phone_number')}>
                Phone Number
                {sortConfig.key === 'phone_number' && (sortConfig.direction === 'ascending' ? (
                  <ChevronUpIcon className="w-4 h-4 inline-block ml-2" />
                ) : (
                  <ChevronDownIcon className="w-4 h-4 inline-block ml-2" />
                ))}
              </th>
              <th className="py-2 px-4 border-b cursor-pointer" onClick={() => requestSort('instance')}>
                Instance
                {sortConfig.key === 'instance' && (sortConfig.direction === 'ascending' ? (
                  <ChevronUpIcon className="w-4 h-4 inline-block ml-2" />
                ) : (
                  <ChevronDownIcon className="w-4 h-4 inline-block ml-2" />
                ))}
              </th>
              <th className="py-2 px-4 border-b cursor-pointer" onClick={() => requestSort('registration_date')}>
                Registration Date
                {sortConfig.key === 'registration_date' && (sortConfig.direction === 'ascending' ? (
                  <ChevronUpIcon className="w-4 h-4 inline-block ml-2" />
                ) : (
                  <ChevronDownIcon className="w-4 h-4 inline-block ml-2" />
                ))}
              </th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.slice(indexOfFirstData, indexOfLastData).map((item) => (
              <tr key={item.student_id} className="border-b">
                <td className="py-2 px-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt="Profile"
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                </td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.email}</td>
                <td className="py-2 px-4">{item.phone_number}</td>
                <td className="py-2 px-4">{item.instance}</td>
                <td className="py-2 px-4">{item.registration_date}</td>
                <td className="flex py-2 px-4">
                  <button onClick={() => onDelete(item.student_id)}>
                    <img src={Delete} alt="Delete" className="w-4 h-4 mr-3" />
                  </button>
                  <button onClick={() => handleEditClick(item)}>
                    <img src={edit} alt="Edit" className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Control */}
      <div className="flex justify-between bg-white items-center text-sm border-b border-gray-300 p-2">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="bg-transparent border border-black text-black px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <div className="flex space-x-2">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="bg-transparent text-gray-500 px-2 py-1 rounded"
            >
              {currentPage - 1}
            </button>
          )}

          <span className="bg-[#A51535] text-white px-3 py-1 rounded">{currentPage}</span>

          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="bg-transparent text-gray-500 px-2 py-1 rounded"
            >
              {currentPage + 1}
            </button>
          )}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="bg-transparent border border-black text-black px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableComponent;
