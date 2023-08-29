import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useItemsCtx } from "../context/ItemsContextProvider";
import { size, shoeSize } from "../data/selections";
import { useAuthCtx } from "../context/AuthProvider";
import Loader from "../components/ui/Loader";

function SingleClothesPage() {
  const { clothesUid } = useParams();
  const {
    clothesArr,
    setCartArr,
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
    tempCart,
    navigate,
    loadingClothes,
  } = useItemsCtx();
  const { ui } = useAuthCtx();
  const currentClothesObj = clothesArr.find(
    (product) => product.uid === clothesUid
  );
  const [selectedSize, setSelectedSize] = useState("");
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  function addToCart() {
    setCartArr(tempCart);
    tempCart.length > 0
      ? ui.showSuccess("Added to Cart")
      : ui.showError("Quantity must be at least 1");
  }

  return ( loadingClothes ? <Loader /> :
    <div className="min-h-screen lg:min-h-[130rem] text-3xl container flex flex-col w-full lg:flex-row lg:items-start lg:pt-[20rem] lg:gap-20">
      <div className="w-full lg:w-8/12">
      <img
        src={currentClothesObj.imgURL}
        alt={currentClothesObj.brand}
        className="w-full"
      />
      </div>
      <div className="flex flex-col space-y-10">
      <h3 className="text-gray-400">
        {currentClothesObj.category.charAt(0).toUpperCase() +
          currentClothesObj.category.slice(1)}{" "}
        / Product name{" "}
      </h3>
      <h4 className="font-semibold">
        {currentClothesObj.brand.charAt(0).toUpperCase() +
          currentClothesObj.brand.slice(1)}
      </h4>
      <p className="text-gray-600">
        Gender:{" "}
        {currentClothesObj.gender.charAt(0).toUpperCase() +
          currentClothesObj.gender.slice(1)}
      </p>
      <div className="flex gap-2 text-gray-600">
        <p className="mt-2 mr-3.5">Size: </p>
        <select
          className="ml-16 p-1.5 border border-black bg-white rounded-none cursor-pointer"
          value={selectedSize}
          type="text"
          name="size"
          id="size"
          onChange={handleSizeChange}
        >
          <option disabled value="">
            Select Size
          </option>
          {currentClothesObj.category !== "shoes"
            ? size.map((sObj) =>
                currentClothesObj.size === sObj ? (
                  <option key={sObj} value={sObj}>
                    {sObj}
                  </option>
                ) : (
                  <option
                    disabled
                    className="text-gray-200"
                    key={sObj}
                    value={sObj}
                  >
                    {sObj}
                  </option>
                )
              )
            : shoeSize.map((sObj) =>
                currentClothesObj.size === sObj ? (
                  <option key={sObj} value={sObj}>
                    {sObj}
                  </option>
                ) : (
                  <option
                    disabled
                    className="text-gray-200"
                    key={sObj}
                    value={sObj}
                  >
                    {sObj}
                  </option>
                )
              )}
        </select>
      </div>
      <div
        className="flex gap-2 text-gray-600
    "
      >
        <p className="mt-2.5 mr-7 pr-0.5">Quantity: </p>
        <div className="flex border-l border-t border-b border-black">
          {/* <input type="number" className="w-14 text-center" value={null ? getItemQuantity(cartArr.uid) : quanChange} onChange={(event) => {
                  setQuanChange(event.target.value)}} /> */}
          <p className="w-14 text-center mt-2.5">
            {getItemQuantity(currentClothesObj.uid)}
          </p>
          <div className="flex flex-col">
            <button
              onClick={() =>
                increaseCartQuantity(
                  currentClothesObj.uid,
                  currentClothesObj.quantity
                )
              }
              className="text-lg border-l border-r border-b px-2 border-black"
            >
              <i className="fa fa-arrow-up" aria-hidden="true"></i>
            </button>
            <button
              onClick={() => decreaseCartQuantity(currentClothesObj.uid)}
              className="text-lg border-l border-r px-2 border-black"
            >
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      <p>{currentClothesObj.price.toFixed(2)} €</p>
      <div className="flex flex-col gap-8 align-items-center">
        <button
          disabled={selectedSize !== currentClothesObj.size}
          onClick={() =>
            addToCart((tempCart) => [...tempCart, currentClothesObj])
          }
          className="cursor-pointer border border-black py-4 w-full bg-black text-white hover:bg-white hover:text-black ease-in-out duration-300"
        >
          Add to Cart
        </button>
        <div className="flex gap-2">
          <i className="fa fa-angle-left mt-0.5" aria-hidden="true"></i>
          <button onClick={() => navigate(-1)} className="block mb-10 hover:underline">
            Back to shopping
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SingleClothesPage;
