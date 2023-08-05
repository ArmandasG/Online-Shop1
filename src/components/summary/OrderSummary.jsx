import React from 'react'
import { useItemsCtx } from '../../store/ItemsContextProvider'
import SingleOrderSummary from './SingleOrderSummary'

function OrderSummary() {
    const { cartArr, allItems } = useItemsCtx()
    console.log('cartArr ===', cartArr);
  return (
    <div className='orderSummaryContainer bg-slate-200'>

    <ul className="grid grid-cols-1 ">
          {cartArr.map((oObj, uid) => (
            <SingleOrderSummary key={uid} OrderItem={oObj} allItems={allItems} />
          ))}
        </ul>
    </div>
  )
}

export default OrderSummary