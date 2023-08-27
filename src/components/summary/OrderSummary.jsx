import React, { useEffect } from "react";
import { useItemsCtx } from "../../context/ItemsContextProvider";
import SingleOrderSummary from "./SingleOrderSummary";
import { Disclosure, Transition } from "@headlessui/react";

function OrderSummary() {
  const { cartArr, clothesArr, cartIsOpen, deliveryFee } = useItemsCtx();
  const allCartItemsPrice = cartArr.reduce((total, cartItem) => {
    const item = clothesArr.find((i) => i.uid === cartItem.uid);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);
  const allCartItemsPriceWithDeliveryFee = deliveryFee.map((fObj) =>
    (fObj + allCartItemsPrice).toFixed(2)
  );

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="py-2">
            <div
              className={`${
                !open ? "bg-white mx-2 px-6 container" : "container"
              }`}
            >
              <Disclosure.Button className="flex justify-between pt-6 pb-4 w-full">
                <div className="flex">
                  <i
                    className="fa fa-shopping-cart mt-1 mr-2"
                    aria-hidden="true"
                  ></i>
                  {!open ? (
                    <div className="flex">
                      <p className="text-xl">Show order summary</p>
                      <i
                        className="fa fa-angle-down mt-1 text-sm ml-2"
                        aria-hidden="true"
                      ></i>
                    </div>
                  ) : (
                    <div className="flex">
                      <p className="text-xl">Hide order summary</p>
                      <i
                        className="fa fa-angle-up mt-1 text-sm ml-4"
                        aria-hidden="true"
                      ></i>
                    </div>
                  )}
                </div>
                <span className="text-2xl">
                  {deliveryFee.length === 0
                    ? allCartItemsPrice.toFixed(2)
                    : allCartItemsPriceWithDeliveryFee}{" "}
                  €
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel>
                  {({ close }) => (
                    <div>
                      {useEffect(() => {
                        cartIsOpen ? close() : "";
                      }, [cartIsOpen])}
                      <ul className="grid grid-cols-1 pt-4 pb-10">
                        {cartArr.map((oObj, uid) => (
                          <SingleOrderSummary
                            key={uid}
                            OrderItem={oObj}
                            clothesArr={clothesArr}
                          />
                        ))}
                      </ul>

                      <div className="flex justify-between py-2 text-gray-500">
                        <p className="text-xl">Subtotal</p>
                        <span className="text-2xl">
                          {allCartItemsPrice.toFixed(2)} €
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b-2 text-gray-500">
                        <p className="text-xl">Shipping</p>
                        <span className="text-xl">
                          {deliveryFee.length && cartArr.length > 0
                            ? `${deliveryFee.map((fObj) => fObj.toFixed(2))} €`
                            : "Calculated at next step"}
                        </span>
                      </div>
                      <div className="py-4 flex justify-between font-bold">
                        <p className="text-xl">Total</p>
                        <span className="text-xl">
                          {deliveryFee.length === 0
                            ? allCartItemsPrice.toFixed(2)
                            : allCartItemsPriceWithDeliveryFee}{" "}
                          €
                        </span>
                      </div>
                    </div>
                  )}
                </Disclosure.Panel>
              </Transition>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default OrderSummary;
