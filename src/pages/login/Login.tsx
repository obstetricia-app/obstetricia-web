import React from "react";
import styles from "./Login.module.scss";
import logo from "../../@core/images/Logo.png";
import logoShort from "../../@core/images/Logo_Short.png";
import LoginContentContainer from "./contentContainer/LoginContentContainer";

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginImage}>
        <img className={styles.logo} src={logo} alt="Logo" />
        <img className={styles.logoShort} src={logoShort} alt="Logo Short" />

        <LoginContentContainer key="loginContentContainerInner" isMobile />
      </div>

      <LoginContentContainer key="loginContentContainerOuter" />
    </div>
  );
}

export default Login;
