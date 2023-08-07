import React from 'react'
import DeliveryInformation from '../components/summary/DeliveryInformation'
import OrderSummary from '../components/summary/OrderSummary'
import ShippingMethod from '../components/summary/ShippingMethod'
import PaymentMethod from '../components/summary/PaymentMethod'

function CartDelivery() {
  return (
    <div className='bg-neutral-100'>
        <OrderSummary />
        <DeliveryInformation />
        <ShippingMethod />
        <PaymentMethod />
    </div>
  )
}

export default CartDelivery