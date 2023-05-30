import React, { useState } from "react";

function Filter({ clothes }) {
  const sorted = [...clothes];
  const [sortItem, setSortItem] = useState(false);
  const [sortItem2, setSortItem2] = useState(false);
  const noShow = sortItem === false ? "" : "hidden";
  const noShow2 = sortItem2 === false ? "" : "hidden";

  function sortByLatest() {
    sorted.sort((a, b) => b.addDate.getTime() - a.addDate.getTime());
    console.log("sorted ===", sorted);
    setSortItem(true);
    setSortItem2(false);
  }

  function sortByOldest() {
    sorted.sort((a, b) => a.addDate.getTime() - b.addDate.getTime());
    console.log("sorted ===", sorted);
    setSortItem2(true);
    setSortItem(false);
  }

  return (
    <div className="flex justify-between">
      <span>Filter(amount)</span>
      <div>
        <div onClick={sortByLatest} className={noShow}>
          {" "}
          <span className="pr-3">Sort by latest</span>
          <i className="fa fa-angle-down" aria-hidden="true"></i>{" "}
        </div>
        {sortItem && (
          <div onClick={sortByOldest} className={noShow2}>
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
