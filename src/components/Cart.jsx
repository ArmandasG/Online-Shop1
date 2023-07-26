import React from 'react'
import { useItemsCtx } from '../store/ItemsContextProvider'
import SingleCartItem from './SingleCartItem'

function Cart({myCartNav, onClose}) {
  const { cartArr, setCartArr } = useItemsCtx()
  return (
    <div className='cartOverlay pt-4 pl-4' id={myCartNav}>
      <div className='ml-8 mt-4 mr-8'>
        <h3>
        Cart
        </h3>
        <div className='flex justify-between border-b'>
          <span>Product</span>
          <div className='flex gap-8 mr-8'>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          </div>
        </div>
        <ul className='grid grid-cols-1'>
        {cartArr.map((cObj, index) => (
          <SingleCartItem key={index} cartItem={cObj} />
        ))}
        </ul>
        <button onClick={() => setCartArr([])} className='block'>Check Out</button>
        <span onClick={onClose} className='text-decoration-line: underline cursor-pointer'><i className="fa fa-angle-left" aria-hidden="true"></i>Back to Shopping</span>
        </div>
        </div>
  )
}

export default Cart