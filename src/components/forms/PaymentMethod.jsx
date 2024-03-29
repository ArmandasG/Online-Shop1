import React from "react";
import Directory from "../summary/Directory";
import { useFormik } from "formik";
import { useItemsCtx } from "../../context/ItemsContextProvider";

function PaymentMethod() {
  const {
    navigate,
    deliveryFee,
    deliveryMethod,
    shippingInfo,
    setCartArr,
    setTempCart,
  } = useItemsCtx();
  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      nameOnCard: "",
      expirationDate: "",
      securityCode: "",
    },
    onSubmit: (values) => {
      navigate("/thank-you");
      setCartArr([]);
      setTempCart([]);
    },
  });
  return (
    <div className="lg:w-full">
      <Directory />
      <div className="flex flex-col container bg-white pt-10 text-xl lg:w-full">
        <div className="border border-black px-4">
          <div className="flex justify-between py-5 border-b-2 border-gray-400">
            <h3 className="w-2/12">Contact</h3>
            <span className="w-8/12">{shippingInfo.email}</span>
            <button
              onClick={() => navigate("/cart/information")}
              className="underline"
            >
              Change
            </button>
          </div>
          <div className="flex justify-between py-5 border-b-2 border-gray-400">
            <h3 className="w-2/12">Ship To</h3>
            <span className="w-8/12">
              {shippingInfo.address}
              {shippingInfo.addressExtra !== ""
                ? ` - ${shippingInfo.addressExtra}`
                : ""}
              , {shippingInfo.city}, {shippingInfo.country}
            </span>
            <button
              onClick={() => navigate("/cart/information")}
              className="underline"
            >
              Change
            </button>
          </div>
          <div className="flex justify-between py-5">
            <h3 className="w-2/12">Method</h3>
            <span className="w-8/12">
              {deliveryMethod} - {deliveryFee} €
            </span>
            <button
              onClick={() => navigate("/cart/shipping")}
              className="underline"
            >
              Change
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h2>{"Payment Method".toUpperCase()}</h2>
          <p className="py-2">
            This Is A Project And No Transactions Are Available
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-4 px-4 py-3 border-t-2 border-l-2 border-r-2 border-gray-400 bg-white flex justify-between items-center">
              <h3>{"Credit Card".toUpperCase()}</h3>
              <span className="border px-6 py-0.5 bg-orange-400 rounded-lg font-bold text-white text-2xl">
                B
              </span>
            </div>
            <div className="py-6 px-4 bg-neutral-200 divide-y-8 border-l-2 border-b-2 border-r-2 border-gray-400">
              <div className="flex gap-8">
                <input
                  disabled
                  className="p-4 border border-black w-full bg-white"
                  placeholder="Card number"
                  type="text"
                  id="cardNumber"
                  value={formik.values.cardNumber}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex gap-8">
                <input
                  disabled
                  className="p-4 border border-black w-full bg-white"
                  placeholder="Name on Card"
                  type="text"
                  id="nameOnCard"
                  value={formik.values.nameOnCard}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex gap-8">
                <input
                  disabled
                  className="p-4 border border-black w-full bg-white"
                  placeholder="Expiration date (MM / YY)"
                  type="text"
                  id="expirationDate"
                  value={formik.values.expirationDate}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <input
                  disabled
                  className="p-4 border border-black w-full bg-white"
                  placeholder="Security code"
                  type="text"
                  id="securityCode"
                  value={formik.values.securityCode}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="py-8 bg-white">
              <div className="flex py-10">
                <div className="flex gap-2 w-8/12 justify-center text-xl">
                  <i className="fa fa-angle-left mt-5" aria-hidden="true"></i>
                  <button
                    onClick={() => navigate(-1)}
                    className="block hover:underline"
                    type="button"
                  >
                    Return To Shipping
                  </button>
                </div>
                <button
                  className="w-full tracking-wider font-semibold border border-black py-4 bg-black text-white text-lg hover:bg-white hover:text-black ease-out duration-300"
                  type="submit"
                >
                  {"Finalize payment".toUpperCase()}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
