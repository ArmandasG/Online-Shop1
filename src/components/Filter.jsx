import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { type } from "../assets/selections";
import { FilterType } from "./filters/FilterType";

const filterOptions = [
  "type",
  "color",
  "size",
  "brand",
  "gender",
  "priceRange",
];

function Filter({ clothesArr, setClothesArr }) {
  const [filters, setFilters] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(type[0]);
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

  const gatherFilters = () => {
    console.log("pritaikyti filtrą-------------");
  };

  function refreshFilters() {
    console.log("atnaujinti filtrai-----------------");
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
          <h3>Filter</h3>
          {filterOptions.map((fObj) => (
            <FilterType
              onFilter={gatherFilters}
              className="block"
              key={fObj}
              fObj={fObj}
            >
              {fObj}
              <i className="fa fa-angle-down pl-2" aria-hidden="true"></i>
            </FilterType>
          ))}
          <button onClick={gatherFilters} className="mr-4">
            Apply filter
          </button>
          <button onClick={refreshFilters} className="ml-4">
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </button>
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

export default Filter;
