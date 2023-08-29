import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SingleClothes({ clothes, changeGrid }) {
  return (
    <li className="h-full w-full lg:hover:scale-90 duration-200">
      <Link
        className="flex flex-col items-center text-2xl h-full"
        to={`/clothes/${clothes.uid}`}
      >
        <div
          className={`${
            !changeGrid ? "h-3/4" : "h-[26rem]"
          } aspect-w-4 aspect-h-4 w-full lg:aspect-w-16 lg:aspect-h-16 object-cover`}
        >
          <img
            loading="lazy"
            src={clothes.imgURL}
            alt={clothes.brand}
            className="w-full h-full"
          />
        </div>
        <div className="items-start w-full">
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
    imgURL: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
};

export default SingleClothes;
