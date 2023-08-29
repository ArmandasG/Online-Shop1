import SingleClothes from "../components/SingleClothes";
import Filter from "../components/filters/Filter";
import FilterSort from "../components/filters/FilterSort";
import Loader from "../components/ui/Loader";
import { useItemsCtx } from "../context/ItemsContextProvider";
import { useRespCtx } from "../context/ResponsiveContextProvider";

function ClothesPage() {
  const { clothesArr, loadingClothes } = useItemsCtx();
  const { windowWidth } = useRespCtx();
  return (
    <div className="min-h-screen container">
      {windowWidth >= 1024 ? (
        <div className="flex justify-between">
          <span className="text-2xl pt-4 pr-4 pb-4 text-gray-400">Filter</span>
          <div className="flex">
          <FilterSort />
          <button className="p-4"><i className="fa fa-th-large text-2xl hover:text-gray-600" aria-hidden="true"></i></button>
          <button><i className="fa fa-th text-2xl hover:text-gray-600" aria-hidden="true"></i></button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div>
        <Filter />
      </div>
      {loadingClothes ? (
        <Loader />
      ) : (
        <ul className="grid grid-cols-2 gap-4 ml-8 mt-10">
          {clothesArr.map((cObj) => (
            <SingleClothes key={cObj.uid} clothes={cObj} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ClothesPage;
