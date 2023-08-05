import React from "react";
import { useItemsCtx } from "../../store/ItemsContextProvider";
import SingleOrderSummary from "./SingleOrderSummary";

function OrderSummary() {
  const { cartArr, allItems } = useItemsCtx();
  console.log("cartArr ===", cartArr);
  return (
    <div className="">
      <div className="container">
        <ul className="grid grid-cols-1 pt-4 pb-10">
          {cartArr.map((oObj, uid) => (
            <SingleOrderSummary
              key={uid}
              OrderItem={oObj}
              allItems={allItems}
            />
          ))}
        </ul>
        <div className="flex justify-between py-2">
          <p className="text-xl">Subtotal</p>
          <span className="text-2xl">{cartArr.reduce((total , cartItem) => {
          const item = allItems.find(i => i.uid === cartItem.uid)
          return total + (item?.price || 0) * cartItem.quantity }, 0)
        }.00 Eur</span>
        </div>
        <div className="flex justify-between py-2 border-b-2">
          <p className="text-xl">Shipping</p>
          <span className="text-xl">Calculated at next step</span>
        </div>
        <div className="py-4 flex justify-between font-bold">
        <p className="text-xl">Total</p>
        <span className="text-xl">{cartArr.reduce((total , cartItem) => {
          const item = allItems.find(i => i.uid === cartItem.uid)
          return total + (item?.price || 0) * cartItem.quantity }, 0)
        }.00 Eur</span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
