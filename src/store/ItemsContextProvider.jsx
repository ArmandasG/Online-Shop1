import { useState, createContext, useContext } from "react";
import {clothes} from '../assets/items'
import { useNavigate } from "react-router-dom";

const ItemsContext = createContext();

ItemsContext.displayName = 'Items'

const ItemsContextProvider = ({ children }) => {
  const [allItems, setAllItems] = useState(clothes)
    const [clothesArr, setClothesArr] = useState(clothes);
    const [cartArr, setCartArr] = useState([]);
    const [tempCart, setTempCart] = useState([])
    const [cartIsOpen, setCartIsOpen] = useState(false)
    const navigate = useNavigate()
console.log('tempCart ===', tempCart);

    const resetClothes = () => {setClothesArr(clothes)}

    const getItemQuantity = (uid) => {
      return tempCart.find(item => item.uid === uid)?.quantity || 0;
    } 

    const increaseCartQuantity = (uid) => {
      setTempCart(currentItems => {
        if (currentItems.find(item => item.uid === uid) == null) {
          return [...currentItems, {uid, quantity: 1}]
        } else {
          return currentItems.map(item => {
            if (item.uid === uid) {
              return {...item, quantity: item.quantity + 1 }
            } else {
              return item
            }
          })
        }
      })
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
      navigate
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