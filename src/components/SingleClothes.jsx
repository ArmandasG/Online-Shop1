import React from 'react'
import { Link } from 'react-router-dom'

function SingleClothes({clothes}) {
  return (
    <li>
      <Link to={`/clothes/${clothes.uid}`}>
        <img src={clothes.img} alt={clothes.brand} className='h-60 w-70 min-h-fit' />
        <h4 className='text-xl'>{clothes.brand}</h4>
        <span className='text-xl'>{clothes.price}.00€</span>
        </Link>
    </li>
  )
}

export default SingleClothes