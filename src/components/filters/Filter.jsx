import React, { useState } from "react";
import { FilterType } from "./FilterType";
import FilterSort from "./FilterSort";
import { useRespCtx } from "../../context/ResponsiveContextProvider";

const filterOptions = [
  "color",
  "brand",
  "gender",
];

function Filter() {
  const [resetFilters, setResetFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const { windowWidth } = useRespCtx()

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
    <div className="flex justify-between lg:flex-none lg:w-[30%]">
      <div className="pt-4 pb-4 pr-4 lg:border-t lg:p-0 lg:w-full">
      {windowWidth < 1024 ? <span className="cursor-pointer text-2xl" onClick={openFilter}>
          Filter({selectedFilter.length})
        </span> : ''}
        <div className={ windowWidth < 1024 ? 'filterOverlay container' : ''} id="filterEl" style={{width: windowWidth < 1024 ? '100%' : 'auto'}}>
        {windowWidth < 1024 ? <div onClick={closeFilter} className="closeBtn cursor-pointer mt-4">
            <img src="/icons/Group1419.svg" alt="" />
          </div> : ''}
          <h3 className="text-6xl text-center mb-24 font-bold lg:hidden">Filter</h3>
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
          <div className="mt-20 flex justify-between lg:flex-col-reverse lg:gap-6">
          <button onClick={refreshFilters} className="ml-4 p-3 border w-2/12 border-black lg:w-full lg:ml-0 hover:text-white hover:bg-black ease-in-out duration-300">
            <i className="fa fa-refresh text-3xl lg:text-2xl lg:hidden" aria-hidden="true"></i>
            <span className="hidden lg:block lg:text-2xl">Reset filters</span>
          </button>
          <button onClick={() => applyFilters()} className="p-3 text-5xl w-9/12 border border-black bg-black text-white lg:text-2xl lg:w-full hover:bg-white hover:text-black ease-in-out duration-300">
            Apply filter
          </button>
          </div>
        </div>
      </div>
      { windowWidth < 1024 ? <FilterSort /> : '' }
    </div>
  );
}

export default Filter;
