import React, { useState } from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import styles from "./LoginForm.module.scss";
import { IUserLogin } from "../../../@core/models/userLogin";

interface ILoginFormProps {
  className?: string;
  onClickForgotPassword: () => void;
}

function LoginForm(props: ILoginFormProps) {
  const { className, onClickForgotPassword } = props;
  const [user, setUser] = useState<IUserLogin>({ password: "", username: "" });
  const [disabledButton, setDisabledButton] = useState(true);

  const clickForgotPassword = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    onClickForgotPassword();
  };

  const onChangeUsername = (username: string) => {
    setUser({ ...user, username });
    setDisabledButton(!username || !user.password);
  };

  const onChangePassword = (password: string) => {
    setUser({ ...user, password });
    setDisabledButton(!password || !user.username);
  };

  return (
    <div className={`${styles.loginContainer} ${className}`}>
      <h1>Acesso do ObstCare</h1>

      <div className={styles.containerUser}>
        <Input
          key="input-user"
          type="text"
          placeholder="Digite seu usuário"
          label="Usuário"
          id="user"
          onChange={onChangeUsername}
        />
      </div>

      <div className={styles.containerPassword}>
        <Input
          key="input-password"
          type="password"
          placeholder="Digite sua senha"
          label="Senha"
          id="password"
          onChange={onChangePassword}
        />
      </div>

      <div className={styles.containerForgotPassword}>
        <button type="button" onClick={(event) => clickForgotPassword(event)}>
          Esqueci minha senha
          <DoubleArrowIcon className={styles.iconShowForgotPassword} />
        </button>
      </div>

      <div className={styles.containerButton}>
        <Button name="Entrar" disabled={disabledButton} />
      </div>
    </div>
  );
}

LoginForm.defaultProps = {
  className: "",
};

export default LoginForm;
