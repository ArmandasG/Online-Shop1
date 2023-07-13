import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useItemsCtx } from "../store/ItemsContextProvider";
import { Listbox } from '@headlessui/react'

function SingleClothesPage() {
  const { clothesUid } = useParams();
  const navigate = useNavigate();
  // const [postObj, setPostObj] = useState({});
  const { clothesArr, setCartArr, cartArr } = useItemsCtx()
  const currentClothesObj = clothesArr.find((product) => product.uid === clothesUid)
  const [selectedSize, setSelectedSize] = useState(['Select size'])
  const [selectedGender, setSelectedGender] = useState(['Select Gender'])
  const [selectedStock, setSelectedStock] = useState([1])
  console.log('cartArr ===', cartArr);

  return (<div className="min-h-screen">
  <img src={currentClothesObj.img} alt={currentClothesObj.brand} />
  <p>{currentClothesObj.category.charAt(0).toUpperCase() + currentClothesObj.category.slice(1)} / Product name </p>
  <p>Brand: {currentClothesObj.brand.charAt(0).toUpperCase() + currentClothesObj.brand.slice(1)}</p>
  <p>Gender: {currentClothesObj.gender.charAt(0).toUpperCase() + currentClothesObj.gender.slice(1)}</p>
  <div className="flex gap-2">
    <p>Size: </p>
  <Listbox value={selectedSize} onChange={setSelectedSize} as='div'>
      <Listbox.Button>{selectedSize}</Listbox.Button>
      
      <Listbox.Options>
        {[currentClothesObj.size].map((size, sizeIdx) => (
          <Listbox.Option
            key={sizeIdx}
            value={[size]}
            className='border cursor-pointer'
          >
            {size}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
    </div>
    <div className="flex gap-2">
    <p>Quantity: </p>
    <Listbox value={selectedStock} onChange={setSelectedStock} as='div'>
      <Listbox.Button>{selectedStock}</Listbox.Button>
      <Listbox.Options>
        {[currentClothesObj.stock].map((stock, stockIdx) => (
          <Listbox.Option
            key={stockIdx}
            value={[stock]}
            className='border cursor-pointer'
          >
            {stock}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
    </div>
  <p>{currentClothesObj.price}.00 Eur</p>
<button onClick={() => setCartArr((prevItems) => [...prevItems, currentClothesObj])} className="block justify-center">Add to Cart</button>
<button onClick={() => navigate(-1)} className="block">Back to shopping</button>
  </div>);
}

export default SingleClothesPage;
