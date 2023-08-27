import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

function SingleClothes({ clothes }) {
  return (
    <li className="p-4">
      <Link className="flex flex-col items-center text-2xl" to={`/clothes/${clothes.uid}`}>
        <img
          src={clothes.img}
          alt={clothes.brand}
          className="w-60 h-60 object-contain mx-auto"
        />
        <div className="mr-24">
        <h4>{clothes.brand}</h4>
        <span>{clothes.price.toFixed(2)} €</span>
        </div>
      </Link>
    </li>
  );
}

SingleClothes.propTypes = {
  clothes: PropTypes.shape({
    category: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    addDate: PropTypes.instanceOf(Date).isRequired,
  })
}

export default SingleClothes;
