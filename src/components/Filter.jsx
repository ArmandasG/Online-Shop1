import React, { useState } from "react";

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

  return (
    <div className="flex justify-between">
      <span>Filter(amount)</span>
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
