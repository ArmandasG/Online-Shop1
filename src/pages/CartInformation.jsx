import React from "react";
import DeliveryInformation from "../components/forms/DeliveryInformation";
import OrderSummary from "../components/summary/OrderSummary";

function CartInformation() {
  return (
    <div className="bg-neutral-100 lg:flex lg:flex-row-reverse lg:bg-white lg:min-h-[71rem]">
      <OrderSummary />
      <DeliveryInformation />
    </div>
  );
}

export default CartInformation;
