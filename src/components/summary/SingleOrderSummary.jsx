import React from 'react'

function SingleOrderSummary({OrderItem, allItems}) {
    const OrderItemEl = allItems.find(oItem => (oItem.uid === OrderItem.uid))
  return (
    <li className='flex border-t py-4'>
        <div className='basis-1/4 my-2'>
        <img className='w-24' src={OrderItemEl.img} alt={OrderItemEl.brand} />
        </div>
        <div className='flex justify-between basis-3/4 text-lg'><h2>{OrderItemEl.brand}, {OrderItemEl.category}, {OrderItemEl.size}</h2>
        <p className='text-2xl text-gray-500'>{OrderItemEl.price}.00 Eur</p></div>
        
    </li>
  )
}

export default SingleOrderSummary