import Filter from "../components/Filter";
import SingleClothes from "../components/SingleClothes";
import { useItemsCtx } from "../store/ItemsContextProvider";

function ClothesPage() {
  const { clothesArr, setClothesArr } = useItemsCtx();

  return (
    <div className="min-h-screen container">
      <div className="filterBar">
        <Filter clothesArr={clothesArr} setClothesArr={setClothesArr} />
      </div>
      <ul className="grid grid-cols-2 gap-4 ml-8 mt-10">
        {clothesArr.map((cObj) => (
          <SingleClothes key={cObj.uid} clothes={cObj} />
        ))}
      </ul>
    </div>
  );
}

export default ClothesPage;
