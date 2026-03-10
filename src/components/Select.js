import React, { useState } from "react";
import PropTypes from "prop-types";

const Select = ({
  options = [],
  groups = [],
  placeholder = "Select an option",
  disabled = false,
  invalid = false,
  scrollable = false,
}) => {
  const [size, setSize] = useState(scrollable ? 5 : 1);

  const style = {
    padding: "8px 12px",
    borderRadius: "6px",
    border: invalid ? "1px solid red" : "1px solid #ccc",
    width: "220px",
    backgroundColor: disabled ? "#f3f3f3" : "white",
  };

  const handleChange = () => {
    if (scrollable) {
      setSize(1); // close dropdown after selecting
    }
  };

  const handleFocus = () => {
    if (scrollable) {
      setSize(5); // open scrollable list
    }
  };

  return (
    <select
      style={style}
      disabled={disabled}
      size={size}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={() => setSize(1)}
    >
      <option value="">{placeholder}</option>

      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}

      {groups.map((group, index) => (
        <optgroup key={index} label={group.label}>
          {group.options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  groups: PropTypes.array,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  scrollable: PropTypes.bool,
};

export default Select;