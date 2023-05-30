import React from 'react'

function SingleClothes({clothes}) {
  return (
    <div>
        <img src={clothes.img} alt={clothes.brand} />
        <h4>{clothes.brand}</h4>
        <span>{clothes.price}</span>
    </div>
  )
}

export default SingleClothes