import React, { useState } from 'react';
import TableComponent from './TableComponent';
import SearchComponent from './SearchComponent';
import Setting from './Setting';
import filter from '../assets/img/filter.png';
import searchIcon from '../assets/img/searchIcon.png';
import plus from '../assets/img/plus.png';
import data from '../assets/Data.json';
import AddUserComponent from './AddUserComponent';
import FilterComponent from './FilterComponent';
import EditComponent from './EditComponent';
import Confirm from './Confirm';

const Student = () => {
  const [studentData, setStudentData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTermFilter, setSearchTermFilter] = useState('');
  const [selectedInstance, setSelectedInstance] = useState('');
  const [filterSettings, setFilterSettings] = useState({
    name: true,
    email: true,
    phoneNumber: true,
    instance: true,
    registrationDate: true,
  });
  const [isAddUserModalOpen, setAddUserModalOpen] = useState(false);

  const [editItem, setEditItem] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const onInstanceChange = (newInstance) => {
    setSelectedInstance(newInstance);
  };

  const onSearchFilter = (newSearchTerm) => {
    setSearchTermFilter(newSearchTerm);
  };

  const filteredData = studentData.filter((item) => {
    const fieldsToSearch = [];

    if (filterSettings.name) fieldsToSearch.push(item.name.toLowerCase());
    if (filterSettings.email) fieldsToSearch.push(item.email.toLowerCase());
    if (filterSettings.phoneNumber) fieldsToSearch.push(item.phone_number.toLowerCase());
    if (filterSettings.instance) fieldsToSearch.push(item.instance.toLowerCase());
    if (filterSettings.registrationDate) fieldsToSearch.push(item.registration_date.toLowerCase());

    const searchQuery = searchTerm.toLowerCase();
    const filterQuery = searchTermFilter.toLowerCase();
    const instanceQuery = selectedInstance.toLowerCase();

    const isInstanceMatch = !instanceQuery || item.instance.toLowerCase().includes(instanceQuery);
    const isSearchMatch = fieldsToSearch.some((field) =>
      field.includes(searchQuery) && field.includes(filterQuery)
    );

    return isInstanceMatch && isSearchMatch;
  });

  const handleAddUser = (newUser) => {
    const updatedData = [...studentData, newUser];
    setStudentData(updatedData);
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setEditModalOpen(true);
  };

  const handleSave = (updatedItem) => {
    setStudentData((prevData) =>
      prevData.map((item) => (item.student_id === updatedItem.student_id ? updatedItem : item))
    );
    setEditModalOpen(false);
    alert('Change saved!');
  };

  const handleCancel = () => {
    setEditModalOpen(false);
  };

  const handleDelete = (id) => {
    setItemToDelete(id);
    setConfirmModalOpen(true);
  };

  const confirmDelete = () => {
    setStudentData((prevData) =>
      prevData.filter((student) => student.student_id !== itemToDelete)
    );
    setConfirmModalOpen(false);
  };

  const cancelDelete = () => {
    setConfirmModalOpen(false);
    setItemToDelete(null);
  };

  return (
    <div className="flex flex-col max-w-full h-screen px-0">
      <div className="p-0">
        <span className="text-[#202224] text-[20px] text-med">Data Student</span>
        <div className="flex justify-between mt-3">
          <div className="flex justify-start">
            <div className="flex justify-between">
              <button className="flex items-center bg-white border border-[#D0D5DD] font-sans text-[8px] md:text-[10px] xl:text-[13px] py-1 md:py-0 px-2 md:px-3 rounded-md text-med mr-2">
                <img src={filter} alt="student" className="w-2 h-2 lg:w-3 lg:h-3 mr-1 md:mr-2" />
                <FilterComponent
                  onInstanceChange={onInstanceChange}
                  searchTermFilter={searchTermFilter}
                  onSearchFilter={onSearchFilter}
                />
              </button>
              <button
                className="flex items-center bg-[#A51535] border border-[#D0D5DD] font-sans text-[8px] md:text-[10px] xl:text-[13px] py-1 md:py-0 px-2 md:px-3 rounded-md text-[#efe9e9]"
                onClick={() => setAddUserModalOpen(true)}
              >
                <img src={plus} alt="student" className="w-2 h-2 lg:w-3 lg:h-3 mr-2" />
                <span>Add User</span>
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="flex justify-end lg:justify-between">
              <div className="flex items-center border border-gray-300 bg-white rounded-md px-3 sm:py-1 lg:py-2 mr-2 w-1/2 lg:w-full">
                <img src={searchIcon} alt="student" className="w-2 h-2 lg:w-3 lg:h-3 mr-1" />
                <SearchComponent searchTerm={searchTerm} onSearch={setSearchTerm} />
              </div>

              <a className="flex items-center">
                <Setting filterSettings={filterSettings} onSettingsChange={setFilterSettings} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <div className="bg-transparent justify-between gap-3 border border-none p-0">
          <div className="flex flex-col font-sans justify-between gap-2">
            <TableComponent data={filteredData} onEdit={handleEdit} onDelete={handleDelete} />
          </div>
        </div>
      </div>

      <AddUserComponent
        isOpen={isAddUserModalOpen}
        onClose={() => setAddUserModalOpen(false)}
        onSave={handleAddUser}
      />

      {isEditModalOpen && (
        <EditComponent
          item={editItem}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}

      {confirmModalOpen && (
        <Confirm
          message="Are you sure you want to delete this item?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default Student;
