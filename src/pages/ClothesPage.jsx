import Filter from "../components/Filter";
import {clothes} from '../assets/items'
import SingleClothes from "../components/SingleClothes";

function ClothesPage() {
  return <div className="min-h-screen">
    <div className="filterBar">
      <Filter />
    </div>
    <div className="grid grid-cols-2">
    {clothes.map((cObj) => (
      <SingleClothes key={cObj.uid} clothes={cObj} />
    ))}
    </div>
  </div>;
}

export default ClothesPage;
