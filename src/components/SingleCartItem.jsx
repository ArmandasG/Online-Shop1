import React from "react";
import PropTypes from "prop-types";
import { useRespCtx } from "../context/ResponsiveContextProvider";

function SingleCartItem({ cartItem, DeleteOfItem, setTempCart, allItems }) {
  const { windowWidth } = useRespCtx()
  const cartItemEl = allItems.find((sItem) => sItem.uid === cartItem.uid);
  return (
    <li className="border-b pt-2 pb-2">
      <div className="flex lg:">
        <img
          className="h-28 w-28 basis-1/4 mt-2 pr-4 object-contain"
          src={cartItemEl?.imgURL}
          alt={cartItemEl?.brand}
        />
        <div className="flex flex-col justify-between basis-3/4 gap-3 lg:justify-normal">
          <h3 className="text-lg text-gray-500 font-bold">
            {cartItemEl?.brand}, {cartItemEl?.category}, {cartItemEl?.size}
          </h3>
          <div className="flex justify-end gap-10 lg:justify-start lg:gap-1">
            <span className="hidden mt-2 lg:block">{cartItem?.quantity} x</span>
            <span className="mt-2">{cartItemEl?.price.toFixed(2)} €</span>
            <span className="border border-black py-2 px-5 mr-5 lg:hidden">
              {cartItem.quantity}
            </span>
            <span className="mt-2 w-18 lg:hidden">
              {(cartItemEl?.price * cartItem?.quantity).toFixed(2)} €
            </span>
          </div>
          { windowWidth < 1024 ? <button
            onClick={() => {
              DeleteOfItem(), setTempCart([]);
            }}
            className="flex w-1/4"
          >
            <img className="h-8" src="/icons/Group1419.svg" alt="remove" />
            <span className="underline">Remove</span>
          </button> : ''}
        </div>
        { windowWidth >= 1024 ?
        <button  onClick={() => {
              DeleteOfItem(), setTempCart([]);
            }}><img className="h-8 hover:opacity-50" src="/icons/Group1419.svg" alt="remove" /></button> : '' }
      </div>
    </li>
  );
}

SingleCartItem.propTypes = {
  cartItem: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
  DeleteOfItem: PropTypes.func.isRequired,
  setTempCart: PropTypes.func.isRequired,
};

export default SingleCartItem;
