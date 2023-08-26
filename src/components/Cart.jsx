import React from "react";
import { useItemsCtx } from "../context/ItemsContextProvider";
import SingleCartItem from "./SingleCartItem";
import { useAuthCtx } from "../context/AuthProvider";
import PropTypes from "prop-types"

function Cart({ myCartNav, onClose }) {
  const { cartArr, setCartArr, setTempCart, navigate, allItems } =
    useItemsCtx();

  const { ui } = useAuthCtx();
  function handleDelete(id) {
    setCartArr((prevItem) =>
      [...prevItem].filter((filtered) => filtered.uid !== id)
    );
    ui.showSuccess("Removed From Cart");
  }
  const allCartItemsPrice = cartArr.reduce((total, cartItem) => {
    const item = allItems.find((i) => i.uid === cartItem.uid);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);
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
            <SingleCartItem
              key={uid}
              cartItem={cObj}
              DeleteOfItem={() => handleDelete(cObj.uid)}
              setTempCart={setTempCart}
            />
          ))}
        </ul>
        <p className="text-end mt-8">{allCartItemsPrice.toFixed(2)} €</p>
        <p className="text-end text-gray-500 mb-6">
          Taxes and shipping calculated at checkout
        </p>
        <div className="flex">
          <button
            onClick={() => {
              cartArr.length > 0
                ? ui.showSuccess("All Items Removed From Cart")
                : "",
                setCartArr([]),
                setTempCart([]);
            }}
            className="py-4 px-5 mt-4 border border-black mr-4"
          >
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </button>
          <button
            onClick={() => {
              navigate("/cart/information"), onClose();
            }}
            className="tracking-wider font-semibold  border py-4 px-30 bg-black text-white w-full mt-4"
          >
            Check Out
          </button>
        </div>
        <div onClick={onClose} className="flex justify-center cursor-pointer">
          <i
            className="fa fa-angle-left mr-4 text-base mt-9"
            aria-hidden="true"
          ></i>
          <span className="text-decoration-line: underline my-8 text-center">
            Back to Shopping
          </span>
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  myCartNav: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Cart;
