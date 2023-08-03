import React from 'react'

function SingleOrderSummary({OrderItem, allItems}) {
    const OrderItemEl = allItems.find(oItem => (oItem.uid === OrderItem.uid))
  return (
    <li>
        <div>
        <img src={OrderItemEl.img} alt={OrderItemEl.brand} />
        </div>
        <h2>{OrderItemEl.brand}, {OrderItemEl.category}, {OrderItemEl.size}</h2>
        <p>{OrderItemEl.price}.00 Eur</p>
    </li>
  )
}

export default SingleOrderSummary