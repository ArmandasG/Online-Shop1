import React from 'react'
import { useItemsCtx } from '../store/ItemsContextProvider'

function Cart({myCartNav, onClose}) {
  const { setCartArr } = useItemsCtx()
  return (
    <div className='cartOverlay pt-4 pl-4' id={myCartNav}>
        <h3>
        Cart
        </h3>
        <button onClick={() => setCartArr([])} className='block'>Check Out</button>
        <span onClick={onClose} className='text-decoration-line: underline cursor-pointer'><i className="fa fa-angle-left" aria-hidden="true"></i>Back to Shopping</span>
        </div>
  )
}

export default Cart