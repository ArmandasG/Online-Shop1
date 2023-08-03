import React from 'react'
import { useItemsCtx } from '../store/ItemsContextProvider';

function SingleCartItem({cartItem, DeleteOfItem}) {
  const { allItems } = useItemsCtx();


  const cartItemEl = allItems.find(sItem => (sItem.uid === cartItem.uid))
    
  return (
    <li className='border-b pt-2 pb-2'>
      <div className='flex'>
        <img className='h-28 w-28 basis-1/4 mt-2 pr-4' src={cartItemEl.img} alt={cartItemEl.brand} />
        <div className='flex flex-col justify-between basis-3/4 gap-3'>
        <h3 className='text-lg text-gray-500 font-bold'>{cartItemEl.brand}, {cartItemEl.category}, {cartItemEl.size}</h3>
        <div className='flex justify-end gap-10'>
        <span className='mt-2'>{cartItemEl.price}.00Eur</span>
        <span className='border border-black py-2 px-5'>{cartItem.quantity}</span>
        <span className='mt-2 w-18'>{cartItemEl.price * cartItem.quantity}.00 Eur</span>
        </div>
        <button onClick={DeleteOfItem} className='flex'><img className='h-8' src="/icons/Group1419.svg" alt="remove" /><span className='underline'>Remove</span></button>
        </div>
    </div>
    </li>
  )
}

export default SingleCartItem