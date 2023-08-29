
import SingleClothes from "../components/SingleClothes";
import Filter from "../components/filters/Filter";
import Loader from "../components/ui/Loader";
import { useItemsCtx } from "../context/ItemsContextProvider";

function ClothesPage() {
  const { clothesArr, loadingClothes } = useItemsCtx();
  return (
    <div className="min-h-screen container">
      <div>
        <Filter />
      </div>
      {loadingClothes ? <Loader/> :
      <ul className="grid grid-cols-2 gap-4 ml-8 mt-10">
        {clothesArr.map((cObj) => (
          <SingleClothes key={cObj.uid} clothes={cObj} />
        ))}
      </ul>
}
    </div>
  );
}

export default ClothesPage;
