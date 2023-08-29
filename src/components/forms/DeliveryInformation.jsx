import { useFormik } from "formik";
import React from "react";
import Directory from "../summary/Directory";
import { useItemsCtx } from "../../context/ItemsContextProvider";
import { cities } from "../../assets/cities";
import { useRespCtx } from "../../context/ResponsiveContextProvider";

function DeliveryInformation() {
  const {
    setCartIsOpen,
    cartIsOpen,
    navigate,
    setShippingInformation,
    setShippingInfo,
  } = useItemsCtx();
  const { windowWidth } = useRespCtx()
  function openCartNav() {
    const cartNav = document.getElementById("myCartNav");
    if (cartIsOpen === false) {
      windowWidth < 1024 ? cartNav.style.width = "100%" : cartNav.style.width = "30%";
      setCartIsOpen(true);
    }
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      keepMeUpdated: false,
      mobilePhoneNumber: "",
      firstName: "",
      lastName: "",
      address: "",
      addressExtra: "",
      city: "",
      country: "",
      postalCode: "",
      saveInformation: false,
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      setShippingInformation([values]);
      saveShippingInfo(values, setSubmitting);
      navigate("/cart/shipping");
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email format";
      }
      if (!values.firstName) {
        errors.firstName = "First name is required";
      }
      if (!values.lastName) {
        errors.lastName = "Last name is required";
      }
      if (!values.address) {
        errors.address = "Address is required";
      }
      if (!values.city) {
        errors.city = "City is required";
      }
      if (!values.country) {
        errors.country = "Country is required";
      }
      if (!values.postalCode) {
        errors.postalCode = "Postal Code is required";
      }

      return errors;
    },
  });

  function saveShippingInfo(ShippingInfoValuesObj) {
    setShippingInfo({
      email: ShippingInfoValuesObj.email,
      keepMeUpdated: ShippingInfoValuesObj.keepMeUpdated,
      mobilePhoneNumber: ShippingInfoValuesObj.mobilePhoneNumber,
      firstName: ShippingInfoValuesObj.firstName,
      lastName: ShippingInfoValuesObj.lastName,
      address: ShippingInfoValuesObj.address,
      addressExtra: ShippingInfoValuesObj.addressExtra,
      city: ShippingInfoValuesObj.city,
      country: ShippingInfoValuesObj.country,
      postalCode: ShippingInfoValuesObj.postalCode,
      saveInformation: ShippingInfoValuesObj.saveInformation,
    });
  }
  return (
    <div className="lg:w-full">
      <Directory />
      <div className="container py-8 bg-white lg:w-full">
        <h2 className="text-2xl text-gray-500">
          {"Contact Information".toUpperCase()}
        </h2>
        <form className="mt-4 space-y-6 " onSubmit={formik.handleSubmit}>
          <div className="w-full">
            <input
              className={`${
                formik.touched.email && formik.errors.email
                  ? "border-red-600 focus-visible:outline-red-600"
                  : ""
              } p-4 border border-black w-full`}
              placeholder="Email *"
              type="email"
              id="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <div className="h-1">
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600 text-base">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>

          <label className="flex">
            <input
              checked={formik.values.keepMeUpdated}
              name="keepMeUpdated"
              className="mr-2 w-6 h-6 border-2 border-gray appearance-none checked:bg-black"
              type="checkbox"
              onChange={formik.handleChange}
            />
            <span className=" text-lg text-gray-500">
              Keep me up to date on news and exclusive offers
            </span>
          </label>
          <input
            className="p-4 border border-black w-full"
            placeholder="Mobile phone number"
            type="phone"
            id="mobilePhoneNumber"
            value={formik.values.mobilePhoneNumber}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <div className="pt-8 space-y-6">
            <h2 className="text-2xl text-gray-500">
              {"Shipping Address".toUpperCase()}
            </h2>
            <div className="flex gap-8">
              <div className="w-full">
                <input
                  className={`${
                    formik.touched.firstName && formik.errors.firstName
                      ? "border-red-600 focus-visible:outline-red-600"
                      : ""
                  } p-4 border border-black w-full`}
                  placeholder="First name *"
                  type="text"
                  id="firstName"
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
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
                    formik.touched.lastName && formik.errors.lastName
                      ? "border-red-600 focus-visible:outline-red-600"
                      : ""
                  } p-4 border border-black w-full`}
                  placeholder="Last name *"
                  type="text"
                  id="lastName"
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <div className="h-1">
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-red-600 text-base">
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="w-full">
              <input
                className={`${
                  formik.touched.address && formik.errors.address
                    ? "border-red-600 focus-visible:outline-red-600"
                    : ""
                } p-4 border border-black w-full`}
                placeholder="Address *"
                type="text"
                id="address"
                value={formik.values.address}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <div className="h-1">
                {formik.touched.address && formik.errors.address ? (
                  <div className="text-red-600 text-base">
                    {formik.errors.address}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="w-full">
              <input
                className="p-4 border border-black w-full"
                placeholder="Apartment, suite, etc... (optional)"
                type="text"
                id="addressExtra"
                value={formik.values.addressExtra}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <div className="h-1"></div>
            </div>
            <div className="w-full">
              <select
                className={`${
                  formik.touched.country && formik.errors.country
                    ? "border-red-600 focus-visible:outline-red-600"
                    : ""
                } p-4 border border-black w-full rounded bg-white`}
                type="text"
                id="country"
                name="country"
                placeholder="Country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled>
                  Select Country *
                </option>

                <option value="Lithuania">Lithuania</option>
                <option value="" disabled>
                  Great Britain (available soon)
                </option>
              </select>
              <div className="h-1">
                {formik.touched.country && formik.errors.country ? (
                  <div className="text-red-600 text-base">
                    {formik.errors.country}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-full">
                <select
                  className={`${
                    formik.touched.city && formik.errors.city
                      ? "border-red-600 focus-visible:outline-red-600"
                      : ""
                  } p-4 border border-black w-full rounded bg-white`}
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled>
                    Select City *
                  </option>
                  {formik.values.country === "Lithuania"
                    ? cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))
                    : ""}
                </select>
                <div className="h-1">
                  {formik.touched.city && formik.errors.city ? (
                    <div className="text-red-600 text-base">
                      {formik.errors.city}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="w-full">
                <input
                  className={`${
                    formik.touched.postalCode && formik.errors.postalCode
                      ? "border-red-600 focus-visible:outline-red-600"
                      : ""
                  } p-4 border border-black w-full`}
                  placeholder="Postal code *"
                  type="number"
                  id="postalCode"
                  value={formik.values.postalCode}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <div className="h-1">
                  {formik.touched.postalCode && formik.errors.postalCode ? (
                    <div className="text-red-600 text-base">
                      {formik.errors.postalCode}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <label className="flex">
              <input
                checked={formik.values.saveInformation}
                name="saveInformation"
                className="mr-2 w-6 h-6 border-2 border-gray appearance-none checked:bg-black"
                type="checkbox"
                onChange={formik.handleChange}
              />
              <span className=" text-lg text-gray-500">
                Save this information for next time
              </span>
            </label>
          </div>
          <div className="flex py-10">
            <div className="flex gap-2 w-8/12 justify-center text-xl">
              <i className="fa fa-angle-left mt-5" aria-hidden="true"></i>
              <button
                onClick={() => openCartNav()}
                className="block hover:underline"
                type="button"
              >
                Return To Cart
              </button>
            </div>
            <button
              className="w-full tracking-wider font-semibold border border-black py-4 bg-black text-white text-lg hover:text-black hover:bg-white ease-in-out duration-300"
              type="submit"
            >
              {"Continue to shipping".toUpperCase()}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeliveryInformation;
