import React from 'react'

function SingleCartItem({cartItem, DeleteOfItem}) {
    
  return (
    <li className='border-t'>
        <img className='h-40 w-40' src={cartItem.img} alt={cartItem.brand} />
        <h3>Product name</h3>
        <span>price</span>
        <span>Quantity</span>
        <span>Total price</span>
        <button onClick={DeleteOfItem} className='flex'><img src="/public/icons/Group1419.svg" alt="remove" /><span className='underline'>Remove</span></button>
    </li>
  )
}

export default SingleCartItem