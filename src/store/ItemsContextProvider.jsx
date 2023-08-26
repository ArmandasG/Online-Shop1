import { useState, createContext, useContext, useEffect } from "react";
import { clothes } from "../assets/items";
import { useNavigate } from "react-router-dom";
import { useAuthCtx } from "./AuthProvider";

const ItemsContext = createContext();

ItemsContext.displayName = "Items";

const ItemsContextProvider = ({ children }) => {
  const { ui } = useAuthCtx();
  const [allItems, setAllItems] = useState(clothes);
  const [clothesArr, setClothesArr] = useState(clothes);
  const [cartArr, setCartArr] = useState([]);
  const [tempCart, setTempCart] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const navigate = useNavigate();
  const [shippingInformation, setShippingInformation] = useState([]);
  const [deliveryFee, setDeliveryFee] = useState([]);
  const [deliveryMethod, setDeliveryMethod] = useState([]);
  const [shippingInfo, setShippingInfo] = useState({});
  const [quantityLimitError, setQuantityLimitError] = useState(false);

  // temp solution considering that the quantity element will be remade to an input -
  const [currentItemUid, setCurrentItemUid] = useState(null);

  useEffect(() => {
    quantityLimitError === true ? handleQuantityLimitError() : "";
  }, [quantityLimitError]);

  useEffect(() => {
    if (currentItemUid !== null) {
      const currentItem = tempCart.find((item) => item.uid === currentItemUid);
      if (currentItem) {
        const availableQty =
          allItems.find((cObj) => cObj.uid === currentItemUid)?.quantity || 0;

        if (currentItem.quantity === availableQty) {
          setQuantityLimitError(true);
        } else {
          setQuantityLimitError(false);
        }
      }
    }
  }, [tempCart, currentItemUid, quantityLimitError]);

  function handleQuantityLimitError() {
    ui.showError("Maximum available quantity reached");
  }
  // temp solution considering that the quantity element will be remade to an input //

  useEffect(() => {
    function isCartEmptyForDelivery() {
      if (cartArr.length === 0) {
        setDeliveryFee([]);
      }
    }
    isCartEmptyForDelivery();
  }, [cartArr]);

  const resetClothes = () => {
    setClothesArr(clothes);
  };

  const getItemQuantity = (uid) => {
    return tempCart.find((item) => item.uid === uid)?.quantity || 0;
  };

  function increaseCartQuantity(uid, availableQty) {
    setTempCart((currentItems) => {
      setCurrentItemUid(uid);
      const existingItem = currentItems.find((item) => item.uid === uid);
      const currentQuantity = existingItem ? existingItem.quantity : 0;

      if (existingItem == null) {
        return [...currentItems, { uid, quantity: currentQuantity + 1 }];
      } else {
        if (currentQuantity < availableQty) {
          setQuantityLimitError(false);
          return currentItems.map((item) =>
            item.uid === uid ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          setQuantityLimitError(true);
          return currentItems;
        }
      }
    });
  }

  const decreaseCartQuantity = (uid) => {
    setTempCart((currentItems) => {
      if (currentItems.find((item) => item.uid === uid)?.quantity === 1) {
        return currentItems.filter((item) => item.uid !== uid);
      } else {
        return currentItems.map((item) => {
          if (item.uid === uid) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const contextValue = {
    allItems,
    clothesArr,
    setClothesArr,
    resetClothes,
    cartArr,
    setCartArr,
    cartIsOpen,
    setCartIsOpen,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    tempCart,
    setTempCart,
    navigate,
    shippingInformation,
    setShippingInformation,
    deliveryFee,
    setDeliveryFee,
    deliveryMethod,
    setDeliveryMethod,
    shippingInfo,
    setShippingInfo,
  };

  return (
    <ItemsContext.Provider value={contextValue}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;

export function useItemsCtx() {
  return useContext(ItemsContext);
}
