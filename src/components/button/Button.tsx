import React from "react";
import styles from "./Button.module.scss";

export interface IButtonProps {
  name: string;
  isSubmit?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Button(props: IButtonProps) {
  const { name, isSubmit, disabled, onClick } = props;

  return (
    <button
      data-testid="button"
      className={styles.primary}
      type={isSubmit ? "submit" : "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
}

Button.defaultProps = {
  isSubmit: false,
  disabled: false,
  onClick: () => ({}),
};

export default Button;
