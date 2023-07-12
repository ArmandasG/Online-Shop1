import React from 'react'
import { Link } from 'react-router-dom'

function SingleClothes({clothes}) {
  return (
    <li>
      <Link to={`/clothes/${clothes.uid}`}>
        <img src={clothes.img} alt={clothes.brand} />
        <h4>{clothes.brand}</h4>
        <span>{clothes.price}.00€</span>
        </Link>
    </li>
  )
}

export default SingleClothes