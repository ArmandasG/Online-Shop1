import { useState, createContext, useContext, useEffect } from "react";
import {clothes} from '../assets/items'
import { useNavigate } from "react-router-dom";
import { useAuthCtx } from "./AuthProvider";

const ItemsContext = createContext();

ItemsContext.displayName = 'Items'

const ItemsContextProvider = ({ children }) => {
  const [allItems, setAllItems] = useState(clothes)
    const [clothesArr, setClothesArr] = useState(clothes);
    const [cartArr, setCartArr] = useState([]);
    const [tempCart, setTempCart] = useState([]);
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const navigate = useNavigate();
    const [shippingInformation, setShippingInformation] = useState([]);
    const [deliveryFee, setDeliveryFee] = useState([]);
    const [deliveryMethod, setDeliveryMethod] = useState([]);
    const [shippingInfo, setShippingInfo] = useState({})

    function handleQuantityLimitError() {
      ui.showError("Maximum available quantity reached");
    }

    useEffect(() => {
      function isCartEmptyForDelivery () {
        if (cartArr.length === 0) {
          setDeliveryFee([])}
      }
      isCartEmptyForDelivery()
    }, [cartArr])
    

    const resetClothes = () => {setClothesArr(clothes)}

    const getItemQuantity = (uid) => {
      return tempCart.find(item => item.uid === uid)?.quantity || 0;
    } 

    function increaseCartQuantity(uid, availableQty) {
      setTempCart((currentItems) => {
        const existingItem = currentItems.find((item) => item.uid === uid);
        const currentQuantity = existingItem ? existingItem.quantity : 0;
  
        if (existingItem == null) {
          return [...currentItems, { uid, quantity: currentQuantity + 1 }];
        }  else {
          if (currentQuantity < availableQty) {
            return currentItems.map((item) =>
              item.uid === uid ? { ...item, quantity: item.quantity + 1 } : item,
            );
          } else {
            return currentItems;
          }
        }
      });
    }

    const decreaseCartQuantity = (uid) => {
      setTempCart(currentItems => {
        if (currentItems.find(item => item.uid === uid)?.quantity === 1) {
          return currentItems.filter(item => item.uid !== uid)
        } else {
          return currentItems.map(item => {
            if (item.uid === uid) {
              return {...item, quantity: item.quantity - 1 }
            } else {
              return item
            }
          })
        }
      })
    }

  
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
      setShippingInfo
    };
  
    return (
      <ItemsContext.Provider value={contextValue}>
        {children}
      </ItemsContext.Provider>
    );
  };
  
  export default ItemsContextProvider;

  export function useItemsCtx() {
    return useContext(ItemsContext)
  }