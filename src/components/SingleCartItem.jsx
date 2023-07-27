import React from 'react'

function SingleCartItem({cartItem, DeleteOfItem}) {
    
  return (
    <li className='border-b pt-2 pb-2'>
      <div className='flex'>
        <img className='h-28 w-28 basis-1/4 mt-2 pr-4' src={cartItem.img} alt={cartItem.brand} />
        <div className='flex flex-col justify-between basis-3/4 gap-3'>
        <h3 className='text-lg text-gray-500 font-bold'>{cartItem.brand}, {cartItem.category}, {cartItem.size}</h3>
        <div className='flex justify-end gap-10'>
        <span className='mt-2'>{cartItem.price}.00Eur</span>
        <span className='border border-black py-2 px-5'>{cartItem.stock}</span>
        <span className='mt-2'>Total price</span>
        </div>
        <button onClick={DeleteOfItem} className='flex'><img className='h-8' src="/icons/Group1419.svg" alt="remove" /><span className='underline'>Remove</span></button>
        </div>
    </div>
    </li>
  )
}

export default SingleCartItem