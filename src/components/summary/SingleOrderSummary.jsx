import React from "react";
import PropTypes from "prop-types";
import { useItemsCtx } from "../../context/ItemsContextProvider";

function SingleOrderSummary({ OrderItem, allItems }) {
  const OrderItemEl = allItems.find((oItem) => oItem.uid === OrderItem.uid);
  return (
    <li className="flex border-t lg:border-none py-4">
      <div className=" basis-28 my-2 relative mr-8">
        <img
          className="w-24 h-24 object-cover"
          src={OrderItemEl?.imgURL}
          alt={OrderItemEl?.brand}
        />
        <span className="bg-white text-center text-xl border w-7 h-7 rounded-full absolute -top-3.5 -right-3.5">
          {OrderItem.quantity}
        </span>
      </div>
      <div className="flex justify-between basis-full text-lg">
        <h2>
          {OrderItemEl?.brand}, {OrderItemEl?.category}, {OrderItemEl?.size}
        </h2>
        <span className="text-2xl text-gray-500">
          {OrderItemEl?.price.toFixed(2)} €
        </span>
      </div>
    </li>
  );
}

SingleOrderSummary.propTypes = {
  clothesArr: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        category: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        gender: PropTypes.string.isRequired,
        uid: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        imgURL: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        addDate: PropTypes.object.isRequired,
      }),
    ])
  ),
  OrderItem: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
};

export default SingleOrderSummary;
