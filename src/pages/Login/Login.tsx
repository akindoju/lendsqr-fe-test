import { FC } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import logo from "../../assets/images/logo.svg";
import loginIllustration from "../../assets/images/loginIllustration.svg";
import "./Login.scss";

export const Login: FC = () => {
  console.log({ height: window.innerWidth });

  return (
    <section className="login">
      <div className="login__main">
        <div className="login__images">
          <img src={logo} className="login__images--logo" alt="logo" />

          <div className="login__images--illustration">
            <img src={loginIllustration} alt="login illustration" />
          </div>
        </div>

        <div className="login__form">
          <LoginForm />
        </div>
      </div>
    </section>
  );
};
