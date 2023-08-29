import { useState } from "react";
import SingleClothes from "../components/SingleClothes";
import Filter from "../components/filters/Filter";
import FilterSort from "../components/filters/FilterSort";
import Loader from "../components/ui/Loader";
import { useItemsCtx } from "../context/ItemsContextProvider";
import { useRespCtx } from "../context/ResponsiveContextProvider";

function ClothesPage() {
  const { clothesArr, loadingClothes } = useItemsCtx();
  const { windowWidth } = useRespCtx();
  const [changeGrid, setChangeGrid] = useState(false)

  return (
    <div className="min-h-screen container">
      {windowWidth >= 1024 ? (
        <div className="flex justify-between">
          <span className="text-2xl pt-4 pr-4 pb-4 text-gray-400">Filter</span>
          <div className="flex">
          <FilterSort />
          <button onClick={() => setChangeGrid(false)} className="p-4"><i className="fa fa-th-large text-2xl hover:text-gray-600" aria-hidden="true"></i></button>
          <button onClick={() => setChangeGrid(true)}><i className="fa fa-th text-2xl hover:text-gray-600" aria-hidden="true"></i></button>
          </div>
        </div>
      ) : (
        ""
      )}
       <div className="lg:flex">
        <Filter />
      
      {loadingClothes ? (
        <Loader />
      ) : ( clothesArr.length > 0 ?
        <ul className={`${changeGrid ? 'lg:grid-cols-3' : ''} grid grid-cols-2 gap-4 mt-10 lg:w-full lg:ml-8`}>
          {clothesArr.map((cObj) => (
            <SingleClothes key={cObj.uid} clothes={cObj} changeGrid={changeGrid} />
          ))}
        </ul> : <div className="w-full flex items-center justify-center text-3xl font-bold" ><h3>No Such Items Available</h3></div>
      )}
      </div>
    </div>
  );
}

export default ClothesPage;
