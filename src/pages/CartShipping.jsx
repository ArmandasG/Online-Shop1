import React from "react";
import OrderSummary from "../components/summary/OrderSummary";
import ShippingMethod from "../components/forms/ShippingMethod";

function CartShipping() {
  return (
    <div className="bg-neutral-100 lg:flex lg:flex-row-reverse lg:bg-white lg:min-h-[71rem]">
      <OrderSummary />
      <ShippingMethod />
    </div>
  );
}

export default CartShipping;
