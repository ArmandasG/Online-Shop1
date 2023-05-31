import React, { useState } from "react";

const filterOptions = [
  'Type',
  'Color',
  'Size',
  'Price Range',
]

function Filter({ clothesArr, setClothesArr }) {
  const sorted = [...clothesArr]
  const [sortItem, setSortItem] = useState(false);
  const [sortItem2, setSortItem2] = useState(false);
  const noShow = sortItem === false ? "" : "hidden";
  const noShow2 = sortItem2 === false ? "" : "hidden";

  function sortByLatest() {
    sorted.sort((a, b) => b.addDate.getTime() - a.addDate.getTime());
    setSortItem(true);
    setSortItem2(false);
    setClothesArr(sorted)
  }

  function sortByOldest() {
    sorted.sort((a, b) => a.addDate.getTime() - b.addDate.getTime());
    setSortItem2(true);
    setSortItem(false);
    setClothesArr(sorted)
  }

  function openFilter () {
    document.getElementById("filterEl").style.height = "100%";
    document.getElementById("filterEl").style.bottom = '0';
  }
  function closeFilter () {
    document.getElementById("filterEl").style.height = "0%";
    document.getElementById("filterEl").style.bottom = '100%';
  }

  return (
    <div className="flex justify-between">
      <div>
      <span className="cursor-pointer" onClick={openFilter}>Filter(amount)</span>
      <div className="filterOverlay container" id='filterEl'>
      <div onClick={closeFilter} className='closeBtn cursor-pointer mt-4'><img src="./icons/Group 1419.svg" alt="" /></div>
<h3>Filter</h3>
{filterOptions.map((fObj) => (
          <span className='block' key={fObj}>{fObj}<i className="fa fa-angle-down pl-2" aria-hidden="true"></i></span>
        ))}
        <button>Apply filter</button>
      </div>
      </div>
      <div>
        <div onClick={sortByLatest} className={`${noShow} cursor-pointer`}>
          {" "}
          <span className="pr-3">Sort by latest</span>
          <i className="fa fa-angle-down" aria-hidden="true"></i>{" "}
        </div>
        {sortItem && (
          <div onClick={sortByOldest} className={`${noShow2} cursor-pointer`}>
            {" "}
            <span className="pr-3">Sort by oldest</span>
            <i className="fa fa-angle-up" aria-hidden="true"></i>{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default Filter;
