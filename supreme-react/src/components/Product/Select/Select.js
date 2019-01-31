import PropTypes from "prop-types";
import React from "react";

const renderOptions = options => {
  return options.map(option => (
    <option key={option} value={option}>
      {option}
    </option>
  ));
};

const Select = ({ options, selectedValue, onChange }) => (
  <div>
    <select value={selectedValue} onChange={onChange}>
      {renderOptions(options)}
    </select>
  </div>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Select;
