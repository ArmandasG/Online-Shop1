import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useItemsCtx } from "../store/ItemsContextProvider";
import { Listbox } from "@headlessui/react";

function SingleClothesPage() {
  const { clothesUid } = useParams();
  const { clothesArr, setCartArr, cartArr, increaseCartQuantity, decreaseCartQuantity, getItemQuantity, tempCart, navigate } = useItemsCtx();
  const currentClothesObj = clothesArr.find(
    (product) => product.uid === clothesUid
  );
  const [selectedSize, setSelectedSize] = useState(["Select size"]);
  
function addToCart(items) {
  setCartArr(tempCart)
}

  // const [selectedStock, setSelectedStock] = useState(0);
  // const [quanChange, setQuanChange] = useState(1)
  /* future update to input on change to switch the amount - REQUIRES STATE */
  // console.log('quanChange ===', quanChange);


  return (
    <div className="min-h-screen text-3xl space-y-10">
      <img
        src={currentClothesObj.img}
        alt={currentClothesObj.brand}
        className="max-w-1xl"
      />
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
        <p className="mt-2">Size: </p>
        <Listbox
          value={selectedSize}
          onChange={setSelectedSize}
          as="div"
          className="ml-20 p-1 border border-black pr-1 "
        >
          <div className="flex justify-between">
            <Listbox.Button className="pl-8 pr-55">
              <span>{selectedSize}</span>
            </Listbox.Button>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </div>

          <Listbox.Options className="pl-8 pr-55 relative">
            {[currentClothesObj.size].map((size, sizeIdx) => (
              <Listbox.Option
                key={sizeIdx}
                value={[size]}
                className="cursor-pointer relative"
              >
                {size}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      <div
        className="flex gap-2 text-gray-600
    "
      >
        <p className="mt-2.5 mr-8">Quantity: </p>
        <div className="flex border-l border-t border-b border-black">
          {/* <input type="number" className="w-14 text-center" value={null ? getItemQuantity(cartArr.uid) : quanChange} onChange={(event) => {
                  setQuanChange(event.target.value)}} /> */}
                  <p className="w-14 text-center mt-2.5">{getItemQuantity(currentClothesObj.uid)}</p>
          <div className="flex flex-col">
            <button onClick={() => increaseCartQuantity(currentClothesObj.uid)} className="text-lg border-l border-r border-b px-2 border-black"><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
              <button onClick={() => decreaseCartQuantity(currentClothesObj.uid)} className="text-lg border-l border-r px-2 border-black"><i className="fa fa-arrow-down" aria-hidden="true"></i></button>
              
          </div>
        </div>
      </div>
      <p>{currentClothesObj.price}.00 Eur</p>
      <div className="flex flex-col gap-8 align-items-center">
        <button
          onClick={() =>
            addToCart((tempCart) => [...tempCart, currentClothesObj])
          }
          className="border py-4 px-40 bg-black text-white"
        >
          Add to Cart
        </button>
        <div className="flex gap-2">
          <i className="fa fa-angle-left mt-0.5" aria-hidden="true"></i>
          <button onClick={() => navigate(-1)} className="block mb-10">
            Back to shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleClothesPage;
