import React from "react";
import { useItemsCtx } from "../store/ItemsContextProvider";
import SingleCartItem from "./SingleCartItem";

function Cart({ myCartNav, onClose }) {
  const { cartArr, setCartArr, setTempCart, navigate, allItems } = useItemsCtx();
  function handleDelete(id) {
    setCartArr((prevItem) =>
      [...prevItem].filter((filtered) => filtered.uid !== id, console.log('prevItem ===', prevItem))
    );
  }
  return (
    <div className="cartOverlay pt-4" id={myCartNav}>
      <div className="ml-8 mt-4 mr-8">
        <div className="flex justify-between border-b text-gray-500">
          <span>Product</span>
          <div className="flex gap-12 mr-8">
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
        </div>
        <ul className="grid grid-cols-1">
          {cartArr.map((cObj, uid) => (
            <SingleCartItem key={uid} cartItem={cObj} DeleteOfItem={() => handleDelete(cObj.uid)} setTempCart={setTempCart} />
          ))}
        </ul>
        <p className="text-end mt-8">{cartArr.reduce((total , cartItem) => {
          const item = allItems.find(i => i.uid === cartItem.uid)
          return total + (item?.price || 0) * cartItem.quantity }, 0)
        }.00 Eur</p>
        <p className="text-end text-gray-500 mb-6">Taxes and shipping calculated at checkout</p>
        <div className="flex">
        <button onClick={() => {setCartArr([]), setTempCart([])}} className="py-4 px-5 mt-4 border border-black mr-4"><i className="fa fa-refresh" aria-hidden="true"></i></button>
        <button onClick={() => {navigate("/cart/information"), onClose()}} className="tracking-wider font-semibold  border py-4 px-30 bg-black text-white w-full mt-4">
          Check Out
        </button>
        </div>
        <div onClick={onClose} className="flex justify-center cursor-pointer">
        <i className="fa fa-angle-left mr-4 text-base mt-9" aria-hidden="true"></i>
        <span
          className="text-decoration-line: underline my-8 text-center"
        >Back to
          Shopping
        </span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
