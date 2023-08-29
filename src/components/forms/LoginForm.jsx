import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import PropTypes from "prop-types";

function LoginForm({ onLogin }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Has to be an email").required(),
      password: Yup.string()
        .min(6, "At least 6 simbols are required")
        .required(),
    }),
    onSubmit: (values) => {
      onLogin(values);
    },
    validate: (values) => {
      const errors = {};
      
      if(!values.email) {
        errors.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email format";
      }
      if(!values.password) {
        errors.password = 'Password is required'
      }
      return errors
    }
  });
  return (
    <form className="mt-6 space-y-8 p-10 text-3xl" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col space-y-8">
        <div className="w-full">
          <input
            className={`${
              formik.touched.email && formik.errors.email
                ? "border-red-600 focus-visible:outline-red-600"
                : ""
            } border p-3 border-black w-full`}
            type="email"
            id="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Email *"
          />
          <div className="h-1">
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600 text-base">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full">
          <input
            className={`${
              formik.touched.password && formik.errors.password
                ? "border-red-600 focus-visible:outline-red-600"
                : ""
            } border p-3 border-black w-full`}
            type="text"
            id="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Password *"
          />
          <div className="h-1">
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-600 text-base">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <button
        className="tracking-wider font-semibold  border py-4 px-40 bg-black text-white w-full"
        type="submit"
      >
        LOGIN
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func,
};

export default LoginForm;
