import React from 'react'
import DeliveryForm from '../components/forms/DeliveryForm'
import OrderSummary from '../components/summary/OrderSummary'

function CartDelivery() {
  return (
    <div>
        <OrderSummary />
        <DeliveryForm />
    </div>
  )
}

export default CartDelivery