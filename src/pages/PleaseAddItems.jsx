import React from "react";
import { useItemsCtx } from "../context/ItemsContextProvider";

function PleaseAddItems() {
  const { navigate } = useItemsCtx();
  return (
    <div className="gap-8 text-5xl flex flex-col items-center justify-center pt-80 container">
      <h1>Something went wrong:</h1>
      <span>One of the following issues might be the cause:</span>
      <ul>
        <li>* Please add items to your cart</li>
        <li>* Please fill shipping information</li>
        <li>* Please select delivery method</li>
      </ul>

      <div className="flex gap-20 mt-20">
        <i className="fa fa-angle-left mb-1" aria-hidden="true"></i>
        <button onClick={() => navigate("/")} className="block mb-10">
          Back to shopping
        </button>
      </div>
    </div>
  );
}

export default PleaseAddItems;
