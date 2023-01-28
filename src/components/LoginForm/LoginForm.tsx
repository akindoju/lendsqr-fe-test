import { FC, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./LoginForm.scss";

interface MyFormValues {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues: MyFormValues = { email: "", password: "" };

  const validateSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="loginForm">
      <div className="loginForm__heading">
        <h1 className="loginForm__heading--main">Welcome!</h1>
        <p className="loginForm__heading--sub">Enter details to login.</p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={async (values) => {}}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
          errors,
        }) => {
          return (
            <form className="loginForm__form">
              <div className="loginForm__form--input">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />

                {errors.email && touched.email ? <p>{errors.email}</p> : null}
              </div>

              <div className="loginForm__form--input">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <span
                  className="password-visible"
                  onClick={() =>
                    setIsPasswordVisible((currentState) => !currentState)
                  }
                >
                  {isPasswordVisible ? "HIDE" : "SHOW"}
                </span>

                {errors.password && touched.password ? (
                  <p>{errors.password}</p>
                ) : null}
              </div>

              <p className="loginForm__form--text">FORGOT PASSWORD?</p>

              <button type="submit" className="loginForm__form--btn">
                {isLoading ? "Loading..." : "LOG IN"}
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
