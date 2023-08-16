import React from 'react'
import DeliveryInformation from '../components/summary/DeliveryInformation'
import OrderSummary from '../components/summary/OrderSummary'

function CartInformation() {
  return (
    <div className='bg-neutral-100'>
        <OrderSummary />
        <DeliveryInformation />
    </div>
  )
}

export default CartInformation