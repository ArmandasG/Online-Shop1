import { Link } from "react-router-dom";
import Burger from "../Burger";
import CheckOutPage from "../../pages/CheckOutPage";
import { useItemsCtx } from "../../context/ItemsContextProvider";
import { useRespCtx } from "../../context/ResponsiveContextProvider";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";

function Header() {
  const { setCartIsOpen, cartIsOpen, navigate, resetClothes, clothesArr, setClothesArr } = useItemsCtx();
  const { windowWidth } = useRespCtx();
  const [isExpanded, setIsExpanded] = useState(false)
  const [query, setQuery] = useState("");

  function openCartNav() {
    const cartNav = document.getElementById("myCartNav");

    if (cartIsOpen) {
      cartNav.style.width = "0";
      setCartIsOpen(false);
    } else if (!cartIsOpen && windowWidth < 1024) {
      cartNav.style.width = "100%";
      setCartIsOpen(true);
    } else {
      cartNav.style.width = "30%";
      setCartIsOpen(true);
    }
  }
  function closeCartNav() {
    document.getElementById("myCartNav").style.width = "0%";
    setCartIsOpen(false);
  }

  useEffect(() => {
    if (!query) {
      return resetClothes();
    }

    const queryWords = query.toLowerCase().split(" ");

    const exactMatch = clothesArr.filter((clothes) => {
      return queryWords.every((word) => {
        return (
          clothes.category.toLowerCase().includes(word) ||
          clothes.color.toLowerCase().includes(word) ||
          clothes.brand.toLowerCase().includes(word)
        );
      });
    });

    const singleWordMatch = clothesArr.filter((clothes) => {
      return queryWords.some((word) => {
        return (
          clothes.category.toLowerCase().includes(word) ||
          clothes.color.toLowerCase().includes(word) ||
          clothes.brand.toLowerCase().includes(word)
        );
      });
    });

    const filteredClothes =
      exactMatch.length > 0 ? exactMatch : singleWordMatch;

    setClothesArr(filteredClothes);
  }, [query]);

  function searchEl(newSearchEl) {
    const searchElement = newSearchEl.toLowerCase();
    setQuery(searchElement);
    navigate("/clothes");
    document.getElementById("myNav").style.width = "0%";
    resetClothes();
  }

  return (
    <header className="container">
      {windowWidth >= 1024 ? <Link to={'/'}><h1 className="text-center mt-20 text-6xl font-bold">SHOPER</h1></Link> : '' }
      <div className={`flex justify-between pt-4 pb-4 mb-4 items-center lg:justify-center lg:mt-10 ${
        cartIsOpen && windowWidth < 1024 ? "sticky top-0 bg-white" : ""
      }`}
      id="myHeader"
    >
      <Burger closeCartNav={closeCartNav} />
      {windowWidth >= 1024 ? <button onClick={() => setIsExpanded(!isExpanded)} className="ml-10 text-2xl">SEARCH</button> : ''}
      <div>
        {windowWidth < 1024 ? (
          <Link
            onClick={closeCartNav}
            className="text-4xl font-bold text-center pl-8"
            to={"/"}
          >
            SHOPER
          </Link>
        ) : (
          ""
        )}
      </div>
      <div>
        <CheckOutPage onOpen={openCartNav} onClose={closeCartNav} />
      </div>
      {windowWidth >= 1024 ? <div onClick={() => {navigate("/login")}} className="ml-20 cursor-pointer flex items-end gap-1 text-2xl hover:underline">
          <span className=""><i className="fa fa-user-circle" aria-hidden="true"></i></span>
          <p>Login</p>
          </div> : ''}
      </div>
      {windowWidth >= 1024 && isExpanded ? <SearchBar searchValue={searchEl} /> : windowWidth >= 1024 && <div className="h-[21px]"></div> }
    </header>
  );
}

export default Header;
