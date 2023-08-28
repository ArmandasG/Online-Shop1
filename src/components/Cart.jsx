import React from "react";
import { useItemsCtx } from "../context/ItemsContextProvider";
import SingleCartItem from "./SingleCartItem";
import { useAuthCtx } from "../context/AuthProvider";
import PropTypes from "prop-types"
import { useRespCtx } from "../context/ResponsiveContextProvider";

function Cart({ myCartNav, onClose }) {
  const { allItems, cartArr, setCartArr, setTempCart, navigate, cartIsOpen } =
    useItemsCtx();
  const { ui } = useAuthCtx();
  const { windowWidth } = useRespCtx()
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
  return (<div>
    {cartIsOpen && windowWidth >=1024 ? <div onClick={onClose} className="absolute h-16 w-16 right-[30%] top-[0%] border border-black bg-black text-white close-icon flex justify-center items-center appear-from-right cursor-pointer"><span className="text-4xl">x</span></div> : ''}
    <div className={`relative ${windowWidth < 1024 ? 'cartOverlay' : 'cartOverlayLg' }  pt-4`} id={myCartNav}>
      <div className="ml-8 mt-4 mr-8">
        <div className="flex justify-between border-b text-gray-500 lg:hidden">
          <span>Product</span>
          <div className="flex gap-12 mr-8">
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
        </div>
        <ul className="grid grid-cols-1">
          {cartArr.map((cObj) => (
            <SingleCartItem
              key={cObj.uid}
              allItems={allItems}
              cartItem={cObj}
              DeleteOfItem={() => handleDelete(cObj.uid)}
              setTempCart={setTempCart}
            />
          ))}
        </ul>
        <div className="lg:flex lg:justify-between lg:mt-8">
        <span className="hidden lg:block">Total</span>
        <p className="text-end mt-8 lg:mt-0">{allCartItemsPrice.toFixed(2)} €</p>
        <p className="text-end text-gray-500 mb-6 lg:hidden">
          Taxes and shipping calculated at checkout
        </p>
        </div>
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
        <div onClick={onClose} className="flex justify-center cursor-pointer lg:hidden">
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
    </div>
  );
}

Cart.propTypes = {
  myCartNav: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Cart;
