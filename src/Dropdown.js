import React from 'react';

const Dropdown = ({ options, selected, onSelectChange }) => {
  const renderedOptions = options.map(option => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <React.Fragment key={option.id}>
        <div onClick={() => onSelectChange(option)} className='item'>
          {option.label}
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className='ui form'>
      <div className='field'>
        <label className='label'>Select A Color</label>
        <div className='ui selection dropdown visible active'>
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className='menu visible transition'>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
