import React, { useState } from "react";
import { useItemsCtx } from "../../context/ItemsContextProvider";

function FilterSort() {
  const { clothesArr, setClothesArr } = useItemsCtx();
  const sorted = [...clothesArr];
  const [sortItem, setSortItem] = useState(false);
  const [sortItem2, setSortItem2] = useState(false);
  const noShow = sortItem === false ? "" : "hidden";
  const noShow2 = sortItem2 === false ? "" : "hidden";

  function sortByLatest() {
    sorted.sort((a, b) => b.addDate - a.addDate);
    setSortItem(true);
    setSortItem2(false);
    setClothesArr(sorted);
  }

  function sortByOldest() {
    sorted.sort((a, b) => a.addDate - b.addDate);
    setSortItem2(true);
    setSortItem(false);
    setClothesArr(sorted);
  }
  return (
    <div>
      <div
        onClick={sortByLatest}
        className={`${noShow} cursor-pointer pt-4 pb-4 pl-4 hover:text-gray-400`}
      >
        {" "}
        <span className="pr-3 text-2xl hover:text-gray-400">
          Sort by latest
        </span>
        <i className="fa fa-angle-down" aria-hidden="true"></i>{" "}
      </div>
      {sortItem && (
        <div
          onClick={sortByOldest}
          className={`${noShow2} cursor-pointer pt-4 pb-4 pl-4 hover:text-gray-400`}
        >
          {" "}
          <span className="pr-3 text-2xl">Sort by oldest</span>
          <i className="fa fa-angle-up" aria-hidden="true"></i>{" "}
        </div>
      )}
    </div>
  );
}

export default FilterSort;
