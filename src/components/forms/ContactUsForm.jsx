import { useFormik } from "formik";
import React from "react";
import { useAuthCtx } from "../../context/AuthProvider";

function ContactUsForm() {
  const { ui } = useAuthCtx();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: (values) => {
      ui.showSuccess("Form has been sent");
    },
    validate: (values) => {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = "Name is required";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email format";
      }

      if (!values.message) {
        errors.message = "Message is required";
      }

      return errors;
    },
  });
  return (
    <form className="mt-4 space-y-6 lg:text-4xl" onSubmit={formik.handleSubmit}>
      <div className="flex justify-between gap-3">
        <div className="w-full flex flex-col">
          <input
            className={`${
              formik.touched.firstName && formik.errors.firstName
                ? "border-red-600 focus-visible:outline-red-600"
                : ""
            } border p-3 border-black w-full`}
            type="text"
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Name *"
          />
          <div className="h-1">
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-600 text-base">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>
        </div>
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
      </div>
      <div className="flex flex-col space-y-7">
        <div className="w-full">
          <input
            className="border p-3 border-black w-full"
            type="number"
            id="phone"
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Phone"
          />
        </div>
        <div className="w-full">
          <input
            className={`${
              formik.touched.message && formik.errors.message
                ? "border-red-600 focus-visible:outline-red-600"
                : ""
            } border p-3 pb-20 border-black w-full`}
            type="textarea"
            id="message"
            value={formik.values.message}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Message *"
          />
          <div className="h-1">
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-600 text-base">
                {formik.errors.message}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <button
        className="tracking-wider font-semibold  border border-black py-4 px-40 bg-black text-white w-full hover:bg-white hover:text-black ease-in-out duration-300"
        type="submit"
      >
        SEND
      </button>
    </form>
  );
}

export default ContactUsForm;
