import React, { useState } from "react";
import { type } from "../assets/selections";
import { FilterType } from "./filters/FilterType";
import PropTypes from "prop-types";

const filterOptions = [
  "type",
  "color",
  "size",
  "brand",
  "gender",
  "priceRange",
];

function Filter({ clothesArr, setClothesArr }) {
  const [resetFilters, setResetFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const sorted = [...clothesArr];
  const [sortItem, setSortItem] = useState(false);
  const [sortItem2, setSortItem2] = useState(false);
  const noShow = sortItem === false ? "" : "hidden";
  const noShow2 = sortItem2 === false ? "" : "hidden";

  function sortByLatest() {
    sorted.sort((a, b) => b.addDate.getTime() - a.addDate.getTime());
    setSortItem(true);
    setSortItem2(false);
    setClothesArr(sorted);
  }

  function sortByOldest() {
    sorted.sort((a, b) => a.addDate.getTime() - b.addDate.getTime());
    setSortItem2(true);
    setSortItem(false);
    setClothesArr(sorted);
  }

  function openFilter() {
    document.getElementById("filterEl").style.height = "100%";
    document.getElementById("filterEl").style.bottom = "0";
    document.getElementById("filterEl").style.position = "fixed";
  }
  function closeFilter() {
    document.getElementById("filterEl").style.height = "0%";
    document.getElementById("filterEl").style.bottom = "100%";
    document.getElementById("filterEl").style.position = "";
  }

  const gatherFilters = (items) => {
    setSelectedFilter(items)
  };

  const applyFilters = () => {
    console.log('selectedFilter ===', selectedFilter);
  }

  function refreshFilters() {
    setResetFilters(true)
  }

  return (
    <div className="flex justify-between">
      <div className="pt-4 pb-4 pr-4">
        <span className="cursor-pointer text-2xl" onClick={openFilter}>
          Filter(amount)
        </span>
        <div className="filterOverlay container" id="filterEl">
          <div onClick={closeFilter} className="closeBtn cursor-pointer mt-4">
            <img src="/icons/Group1419.svg" alt="" />
          </div>
          <h3 className="text-6xl text-center mb-24 font-bold">Filter</h3>
          {filterOptions.map((fObj) => (
            <FilterType
            resetFilters={resetFilters}
            setResetFilters={setResetFilters}
            setSelectedFilter={setSelectedFilter}
            selectedFilter={selectedFilter}
              onFilter={gatherFilters}
              className="block"
              key={fObj}
              fObj={fObj}
            >
              {fObj}
              <i className="fa fa-angle-down pl-2" aria-hidden="true"></i>
            </FilterType>
          ))}
          <div className="mt-20 flex justify-between">
          <button onClick={refreshFilters} className="ml-4 p-3 border w-2/12 border-black">
            <i className="fa fa-refresh text-3xl" aria-hidden="true"></i>
          </button>
          <button onClick={() => applyFilters()} className="p-3 text-5xl w-9/12 border bg-black text-white">
            Apply filter
          </button>
          </div>
        </div>
      </div>
      <div>
        <div
          onClick={sortByLatest}
          className={`${noShow} cursor-pointer pt-4 pb-4 pl-4`}
        >
          {" "}
          <span className="pr-3 text-2xl">Sort by latest</span>
          <i className="fa fa-angle-down" aria-hidden="true"></i>{" "}
        </div>
        {sortItem && (
          <div
            onClick={sortByOldest}
            className={`${noShow2} cursor-pointer pt-4 pb-4 pl-4`}
          >
            {" "}
            <span className="pr-3 text-2xl">Sort by oldest</span>
            <i className="fa fa-angle-up" aria-hidden="true"></i>{" "}
          </div>
        )}
      </div>
    </div>
  );
}

Filter.propTypes = {
  clothesArr: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({
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
  ])),
  setClothesArr: PropTypes.func.isRequired
}

export default Filter;
