import { useState, createContext, useContext } from "react";
import {clothes} from '../assets/items'

const ItemsContext = createContext();

ItemsContext.displayName = 'Items'

const ItemsContextProvider = ({ children }) => {
    const [clothesArr, setClothesArr] = useState(clothes);
  
    const addClothes = (singleClothe) => {
        setClothesArr([...clothesArr, singleClothe]);
    };
  
    const removeClothes = (itemId) => {
        setClothesArr(clothesArr.filter((item) => item.id !== itemId));
    };
  
    const updateClothes = (itemId, updatedItem) => {
        setClothesArr(
        clothesArr.map((item) => (item.id === itemId ? updatedItem : item))
      );
    };
  
    const contextValue = {
      clothesArr,
      setClothesArr,
      addClothes,
      removeClothes,
      updateClothes,
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