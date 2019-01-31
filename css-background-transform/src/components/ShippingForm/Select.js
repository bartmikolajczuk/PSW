import React from 'react';
import PropTypes from "prop-types";

const Select = (props) => (
  <div className="form-group">
    <select
      name={props.name}
      value={props.selectedOption}
      onChange={props.controlFunc}
      className="form-select">
      <option value="">{props.placeholder}</option>
      {props.options.map(opt => {
        return (
          <option
            key={opt}
            value={opt}>{opt}</option>
        );
      })}
    </select>
  </div>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string,
  controlFunc: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default Select;

/*
var options = $('#order_billing_country option');
var countryObj = {};
var values = $.map(options ,function(option) {

	var opt = option.value
	console.log(opt);

  countryObj.opt = option.text;

});
console.log(countryObj);
*/
