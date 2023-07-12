import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useItemsCtx } from "../store/ItemsContextProvider";

function SingleClothesPage() {
  const { clothesUid } = useParams();
  console.log("aba ===", clothesUid);
  const navigate = useNavigate();
  const [postObj, setPostObj] = useState({});
  const { clothesArr, setClothesArr } = useItemsCtx()
  const currentClothesObj = clothesArr.find((product) => product.uid === clothesUid)
  return (<div className="min-h-screen">
  <img src={currentClothesObj.img} alt={currentClothesObj.brand} />
  <p>{currentClothesObj.brand}</p>
  <p>{currentClothesObj.category}</p>
  <p>{currentClothesObj.color}</p>
  <p>{currentClothesObj.gender}</p>
  <p>{currentClothesObj.size}</p>
  <p>{currentClothesObj.price}</p>
  <p>{currentClothesObj.stock}</p>
<button>Back to shopping</button>
<button>Add to Cart</button>
  </div>);
}

export default SingleClothesPage;
