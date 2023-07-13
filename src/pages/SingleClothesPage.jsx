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

  return (<div className="min-h-screen text-3xl space-y-10">
  <img src={currentClothesObj.img} alt={currentClothesObj.brand} className="max-w-1xl" />
  <p className="text-gray-400">{currentClothesObj.category.charAt(0).toUpperCase() + currentClothesObj.category.slice(1)} / Product name </p>
  <p className="font-semibold">{currentClothesObj.brand.charAt(0).toUpperCase() + currentClothesObj.brand.slice(1)}</p>
  <p className="text-gray-600 block">Gender: {currentClothesObj.gender.charAt(0).toUpperCase() + currentClothesObj.gender.slice(1)}</p>
  <div className="flex gap-2 text-gray-600">
    <p>Size: </p>
  <Listbox value={selectedSize} onChange={setSelectedSize} as='div' className='ml-8 p-1 border border-black pr-1'>
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
    <div className="flex gap-2 text-gray-600
    ">
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
<button onClick={() => setCartArr((prevItems) => [...prevItems, currentClothesObj])} className="block justify-center border py-4 px-40 bg-black text-white">Add to Cart</button>
<button onClick={() => navigate(-1)} className="block">Back to shopping</button>
  </div>);
}

export default SingleClothesPage;
