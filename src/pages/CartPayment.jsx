import React from "react";
import OrderSummary from "../components/summary/OrderSummary";
import PaymentMethod from "../components/forms/PaymentMethod";

function CartPayment() {
  return (
    <div className="bg-neutral-100 lg:flex lg:flex-row-reverse lg:bg-white lg:min-h-[71rem]">
      <OrderSummary />
      <PaymentMethod />
    </div>
  );
}

export default CartPayment;
