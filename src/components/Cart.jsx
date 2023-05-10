import React from 'react'

function Cart({myCartNav, onClose}) {
  return (
    <div className='cartOverlay' id={myCartNav}>
        <h3>
        Cart
        </h3>
        <span onClick={onClose} className='text-decoration-line: underline cursor-pointer'><i className="fa fa-angle-left" aria-hidden="true"></i>Back to Shopping</span>
        </div>
  )
}

export default Cart