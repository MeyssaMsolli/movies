import React from 'react';

const Filter = ({ onTitleFilterChange, onRateFilterChange }) => {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Filter by Title"
        onChange={onTitleFilterChange}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        onChange={onRateFilterChange}
      />
    </div>
  );
};

export default Filter;