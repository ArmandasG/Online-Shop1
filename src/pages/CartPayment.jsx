import React from 'react'
import OrderSummary from '../components/summary/OrderSummary'
import PaymentMethod from '../components/forms/PaymentMethod'

function CartPayment() {
  return (
    <div className='bg-neutral-100'><OrderSummary />
      <PaymentMethod /></div>
  )
}

export default CartPayment