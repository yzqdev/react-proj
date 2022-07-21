import React, { Component, useState } from "react";
import PropTypes from "prop-types";

const Checkbox = ({ label, classes, handleCheckboxChange }) => {
  const [isChecked, useIsChecked] = useState(false);
  const toggleCheckboxChange = () => {
    useIsChecked(!isChecked);

    handleCheckboxChange(label);
  };

  return (
    <div className={classes}>
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={ toggleCheckboxChange }
        />

        <span className="checkmark">{label}</span>
      </label>
    </div>
  );
};
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;
