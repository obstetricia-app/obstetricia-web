import React from "react";
import styles from "./Input.module.scss";

interface IInputProps {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

function Input(props: IInputProps) {
  const { id, type, placeholder, label, onChange } = props;

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} data-testid={`${id}-label`}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        data-testid={id}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

Input.defaultProps = {
  placeholder: "",
};

export default Input;
