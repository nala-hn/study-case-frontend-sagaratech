import React from 'react';

const SearchComponent = ({ searchTerm, onSearch}) => {
    return (
        <div className="pl-2 text-sans text-[10px] sm:text-[10px] lg:text-[13px] text-med">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search"
            className="after:border-none rounded-md w-full placeholder-gray-500"
          />
          
        </div>
    );
};

export default SearchComponent;
