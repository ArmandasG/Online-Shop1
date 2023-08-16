import React from 'react'
import PaymentMethod from '../components/summary/PaymentMethod'
import OrderSummary from '../components/summary/OrderSummary'

function CartPayment() {
  return (
    <div className='bg-neutral-100'><OrderSummary />
      <PaymentMethod /></div>
  )
}

export default CartPayment