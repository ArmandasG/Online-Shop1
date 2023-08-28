import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthCtx } from "./AuthProvider";
import PropTypes from 'prop-types'
import { fetchItemsAndImages } from "../helperFns";

const ItemsContext = createContext();

ItemsContext.displayName = "Items";

const ItemsContextProvider = ({ children }) => {
  const { ui } = useAuthCtx();
  const [allItems, setAllItems] = useState([]);
  const [clothesArr, setClothesArr] = useState([]);
  const [cartArr, setCartArr] = useState([]);
  const [tempCart, setTempCart] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const navigate = useNavigate();
  const [shippingInformation, setShippingInformation] = useState([]);
  const [deliveryFee, setDeliveryFee] = useState([]);
  const [deliveryMethod, setDeliveryMethod] = useState([]);
  const [shippingInfo, setShippingInfo] = useState({});
  const [quantityLimitError, setQuantityLimitError] = useState(false);
  const [loadingClothes, setLoadingClothes] = useState(true)

  // temp solution considering that the quantity element will be remade to an input -
  const [currentItemUid, setCurrentItemUid] = useState(null);
  useEffect(() => {
    fetchItemsAndImages('clothes')
    .then((data) => {
      const clothesObject = Object.values(data);
      setAllItems(clothesObject)
      setClothesArr(clothesObject)
      setLoadingClothes(false)
    })
    .catch((error) => {
      console.error('Error fetching clothes', error);
      setLoadingClothes(false)
    })
  }, [])

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
    setClothesArr(allItems);
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
    loadingClothes,
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
ItemsContextProvider.propTypes = {
  children: PropTypes.node,
}
