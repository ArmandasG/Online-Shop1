import Filter from "../components/Filter";
import {clothes} from '../assets/items'
import SingleClothes from "../components/SingleClothes";
import { useEffect, useState } from "react";

function ClothesPage() {
  const [clothesArr, setClothesArr] = useState([])
  useEffect(() => {setClothesArr(clothes)}, [])
  console.log('clothes ===', clothes);
  return <div className="min-h-screen">
    <div className="filterBar">
      <Filter clothesArr={clothesArr} setClothesArr={setClothesArr} />
    </div>
    <div className="grid grid-cols-2">
    {clothesArr.map((cObj) => (
      <SingleClothes key={cObj.uid} clothes={cObj} />
    ))}
    </div>
  </div>;
}

export default ClothesPage;
