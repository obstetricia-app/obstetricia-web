import React from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import styles from "./ForgotPassword.module.scss";

interface IForgotPasswordProps {
  onClickGoBack: () => void;
}

function ForgotPassword(props: IForgotPasswordProps) {
  const { onClickGoBack } = props;

  const clickGoBack = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    onClickGoBack();
  };

  return (
    <div className={`${styles.forgetPasswordContainer}`}>
      <h1>Alterar senha de acesso</h1>

      <div className={styles.containerEmail}>
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="Informe o email para recuperar a senha"
          onChange={() => ({})}
        />
      </div>

      <div className={styles.containerButtons}>
        <Button name="Confirmar" />
        <Button name="Voltar" onClick={clickGoBack} />
      </div>
    </div>
  );
}

export default ForgotPassword;
