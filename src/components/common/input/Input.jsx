import React from "react";
import PropTypes from "prop-types";
import styles from "./input.module.css";

const SharedInput = ({ type, value, name, placeholder, onChange, error }) => {
  const inputClassName =
    type === "date" ? styles.shared_input_date : styles.shared_input;
  return (
    <div >
      <input
        className={inputClassName}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label={`Enter ${type} value`}
      />
      {error && <p className={styles.error_message}>{error}</p>}
    </div>
  );
};

SharedInput.propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'email', 'date']).isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string, 
};

export default SharedInput;
