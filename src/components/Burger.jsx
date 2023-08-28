import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import SearchBar from "./SearchBar";
import { useItemsCtx } from "../context/ItemsContextProvider";
import PropTypes from "prop-types";

const selectOptions = ["All", "Jackets", "Shirts", "Pants", "Shoes"];

function Burger({ closeCartNav }) {
  const { allItems, clothesArr, setClothesArr, resetClothes, navigate } = useItemsCtx();
  const [query, setQuery] = useState("");

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    closeCartNav();
  }
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
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

  function selectedOptionFilter(sObj) {
    if (sObj === "All") {
      resetClothes(), closeNav();
      setQuery("");
    } else {
      resetClothes();
      setQuery("");
      const filteredOptions = allItems.filter((clothes) =>
        clothes.category.toLowerCase().includes(sObj.toLowerCase())
      );
      setClothesArr(filteredOptions);
      closeNav();
    }
  }

  function selectWhatToKnow() {
    navigate("/what-to-know");
    closeNav();
  }

  function selectFindUs() {
    navigate("/find-us");
    closeNav();
  }

  function selectJoinUs() {
    navigate("/join-us");
    closeNav();
  }

  function selectReadMore() {
    navigate("/read-more");
    closeNav();
  }

  return (
    <div className="mb-4">
      <span className="cursor-pointer">
        <img
          onClick={openNav}
          src="/icons/Group6.svg"
          alt="burger"
          className="mt-2"
        />
      </span>
      <section id="myNav" className="overlay flex-col">
        <div
          onClick={closeNav}
          className="closeBtn cursor-pointer ml-4 container mt-4 pt-4"
        >
          <img src="/icons/Group1419.svg" alt="" />
        </div>
        <div className="mt-2 ml-2 container flex flex-col items-start">
          <Disclosure id="disc1">
            {({ open, close }) => (
              <>
                <Disclosure.Button className="text-6xl mt-8">
                  Clothes
                </Disclosure.Button>
                <Transition
                  enter="transition duration-300 ease-out"
                  enterFrom="transform scale-y-95 opacity-0"
                  enterTo="transform scale-y-100 opacity-100"
                  leave="transition duration-100 ease-in"
                  leaveFrom="transform scale-y-100 opacity-100"
                  leaveTo="transform scale-y-95 opacity-0"
                >
                  <Disclosure.Panel>
                    <ul
                      className={`pl-2 pt-2 flex-col transition-all duration-300 text-3xl`}
                    >
                      {selectOptions.map((sObj) => (
                        <Link
                          className="block mb-2"
                          to={"/clothes"}
                          onClick={() => selectedOptionFilter(sObj)}
                          key={sObj}
                        >
                          {sObj}
                        </Link>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure id="disc2">
            {({ open, close }) => (
              <>
                <Disclosure.Button className="text-6xl">
                  Campaigns
                </Disclosure.Button>
                <Transition
                  enter="transition duration-300 ease-out"
                  enterFrom="transform scale-y-95 opacity-0"
                  enterTo="transform scale-y-100 opacity-100"
                  leave="transition duration-100 ease-in"
                  leaveFrom="transform scale-y-100 opacity-100"
                  leaveTo="transform scale-y-95 opacity-0"
                >
                  <Disclosure.Panel>
                    <ul
                      className={`pl-2 pt-2 transition-all duration-300 text-3xl`}
                    >
                      <li
                        onClick={selectJoinUs}
                        className="mb-2 cursor-pointer"
                      >
                        Join us
                      </li>
                      <li
                        onClick={selectReadMore}
                        className="mb-2 cursor-pointer"
                      >
                        Read more
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure id="disc3">
            {({ open, close }) => (
              <>
                <Disclosure.Button className="text-6xl">
                  Press
                </Disclosure.Button>
                <Transition
                  enter="transition duration-300 ease-out"
                  enterFrom="transform scale-y-95 opacity-0"
                  enterTo="transform scale-y-100 opacity-100"
                  leave="transition duration-100 ease-in"
                  leaveFrom="transform scale-y-100 opacity-100"
                  leaveTo="transform scale-y-95 opacity-0"
                >
                  <Disclosure.Panel>
                    <ul
                      className={`pl-2 pt-2 transition-all duration-300 text-3xl`}
                    >
                      <li
                        className="cursor-pointer mb-2"
                        onClick={selectWhatToKnow}
                      >
                        What to know ?
                      </li>
                      <li className="cursor-pointer" onClick={selectFindUs}>
                        Where to find us ?
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <SearchBar searchValue={searchEl} />
          <div onClick={() => {navigate("/login"), closeNav()}} className="cursor-pointer flex gap-8 mt-20 text-5xl hover:underline">
          <span className=""><i className="fa fa-user-circle" aria-hidden="true"></i></span>
          <p>Login</p>
          </div>
        </div>
      </section>
    </div>
  );
}

Burger.propTypes= {
  closeCartNav: PropTypes.func.isRequired,
}

export default Burger;
