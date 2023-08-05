import Filter from "../components/Filter";
import {clothes} from '../assets/items'
import SingleClothes from "../components/SingleClothes";
import { useEffect, useState } from "react";
import { useItemsCtx } from "../store/ItemsContextProvider";

function ClothesPage() {
  const { clothesArr, setClothesArr } = useItemsCtx()
  // console.log('clothesArr ===', clothesArr);

  return <div className="min-h-screen container">
    <div className="filterBar">
      <Filter clothesArr={clothesArr} setClothesArr={setClothesArr} />
    </div>
    <ul className="grid grid-cols-2">
    {clothesArr.map((cObj) => (
      <SingleClothes key={cObj.uid} clothes={cObj} />
    ))}
    </ul>
  </div>;
}

export default ClothesPage;
