import React from 'react'
import ShippingMethod from '../components/summary/ShippingMethod'
import OrderSummary from '../components/summary/OrderSummary'

function CartShipping() {
  return (
    <div className='bg-neutral-100'>
      <OrderSummary />
      <ShippingMethod /></div>
  )
}

export default CartShipping