import React from "react";
import PropTypes from 'prop-types'

function SingleOrderSummary({ OrderItem, allItems }) {
  const OrderItemEl = allItems.find((oItem) => oItem.uid === OrderItem.uid);
  console.log('allItems ===', allItems[12]);
  return (
    <li className="flex border-t py-4">
      <div className=" basis-28 my-2 relative mr-8">
        <img className="w-24 h-24 object-cover" src={OrderItemEl.img} alt={OrderItemEl.brand} />
        <span className="bg-white text-center text-xl border w-7 h-7 rounded-full absolute -top-3.5 -right-3.5">{OrderItem.quantity}</span>
      </div>
      <div className="flex justify-between basis-full text-lg">
        <h2>
          {OrderItemEl.brand}, {OrderItemEl.category}, {OrderItemEl.size}
        </h2>
        <span className="text-2xl text-gray-500">{OrderItemEl.price.toFixed(2)} €</span>
      </div>
    </li>
  );
}

SingleOrderSummary.propTypes = {
  allItems: PropTypes.arrayOf(
    PropTypes.oneOfType([
    PropTypes.shape({
      category: PropTypes.string,
      color: PropTypes.string,
      size: PropTypes.string,
      price: PropTypes.number,
      gender: PropTypes.string,
      uid: PropTypes.string,
      brand: PropTypes.string,
      img: PropTypes.string,
      quantity: PropTypes.number,
      addDate: PropTypes.instanceOf(Date),
    }),
  ])
  ),
  OrderItem: PropTypes.shape({
    uid: PropTypes.string,
    qunatity: PropTypes.number
  })
}


export default SingleOrderSummary;
