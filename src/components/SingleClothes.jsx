import React from "react";
import { Link } from "react-router-dom";

function SingleClothes({ clothes }) {
  return (
    <li className="p-4">
      <Link to={`/clothes/${clothes.uid}`}>
        <img
          src={clothes.img}
          alt={clothes.brand}
          className="w-60 h-60 object-contain"
        />
        <h4 className="text-xl">{clothes.brand}</h4>
        <span className="text-xl">{clothes.price.toFixed(2)} €</span>
      </Link>
    </li>
  );
}

export default SingleClothes;
