import React from "react";
import OrderSummary from "../components/summary/OrderSummary";
import ShippingMethod from "../components/forms/ShippingMethod";

function CartShipping() {
  return (
    <div className="bg-neutral-100">
      <OrderSummary />
      <ShippingMethod />
    </div>
  );
}

export default CartShipping;
