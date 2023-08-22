import React from "react";

function SingleOrderSummary({ OrderItem, allItems }) {
  const OrderItemEl = allItems.find((oItem) => oItem.uid === OrderItem.uid);
  return (
    <li className="flex border-t py-4">
      <div className=" basis-28 my-2 relative mr-8">
        <img className="w-24 h-24 object-cover" src={OrderItemEl.img} alt={OrderItemEl.brand} />
        <span className="bg-white text-center text-xl border w-7 h-7 rounded-full absolute -top-3.5 -right-3.5">{OrderItem.quantity}</span>
      </div>
      <div className="flex justify-between basis-full text-lg">
        <h2>
          {OrderItemEl.brand}, {OrderItemEl.category}, {OrderItemEl.size}
        </h2>
        <span className="text-2xl text-gray-500">{OrderItemEl.price.toFixed(2)} €</span>
      </div>
    </li>
  );
}

export default SingleOrderSummary;
