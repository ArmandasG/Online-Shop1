import { Link } from "react-router-dom";
import Burger from "../Burger";
import CheckOutPage from "../../pages/CheckOutPage";
import { useItemsCtx } from "../../context/ItemsContextProvider";
import { useRespCtx } from "../../context/ResponsiveContextProvider";
import { useEffect } from "react";

function Header() {
  const { setCartIsOpen, cartIsOpen } = useItemsCtx();
  const { windowWidth } = useRespCtx()

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

  return (
    <header
      className={`container flex justify-between pt-4 pb-4 mb-4 items-center ${
        cartIsOpen && windowWidth < 1024 ? "sticky top-0 bg-white" : ""
      }`}
      id="myHeader"
    >
      <Burger closeCartNav={closeCartNav} />
      <div>
        <Link
          onClick={closeCartNav}
          className="text-4xl font-bold text-center pl-8"
          to={"/"}
        >
          SHOPER
        </Link>
      </div>
      <div>
        <CheckOutPage onOpen={openCartNav} onClose={closeCartNav} />
      </div>
    </header>
  );
}

export default Header;
