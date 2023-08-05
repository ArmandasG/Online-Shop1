import React from 'react'
import DeliveryForm from '../components/forms/DeliveryForm'
import OrderSummary from '../components/summary/OrderSummary'

function CartDelivery() {
  return (
    <div className='bg-neutral-100'>
        <OrderSummary />
        <DeliveryForm />
    </div>
  )
}

export default CartDelivery