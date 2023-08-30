import { useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { type, color, brand, gender, priceRange } from "../../data/selections";
import { useRespCtx } from "../../context/ResponsiveContextProvider";
import { useItemsCtx } from "../../context/ItemsContextProvider";

const colectedFilters = {
  type,
  color,
  brand,
  gender,
};

export function FilterType({
  fObj,
  onFilter,
  resetFilters,
  setSelectedFilter,
  setResetFilters,
}) {
  const [selectedOption, setSelectedOption] = useState([]);
  const { setClothesArr, allItems } = useItemsCtx();
  const { windowWidth } = useRespCtx();
  // need adjustment
  const handleSelectOption = (option) => {
    setSelectedOption((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );

    onFilter((prevFilters) =>
      selectedOption.includes(option)
        ? prevFilters.filter((item) => item !== option)
        : [...prevFilters, option]
    );
  };

  function resetStates() {
    setSelectedOption([]);
    setSelectedFilter([]);
    setResetFilters(false);
    setClothesArr(allItems);
  }

  useEffect(() => {
    resetFilters === true ? resetStates() : "";
  }, [resetFilters]);

  return (
    <Listbox value={selectedOption} onChange={setSelectedOption} multiple>
      {({ open }) => (
        <>
          <Listbox.Button className="border-b flex flex-col p-2 w-full items-center text-5xl lg:text-2xl lg:items-start lg:pl-0 lg:w-full">
            {windowWidth < 1024 ? (
              <span>
                {selectedOption.length !== 0
                  ? selectedOption
                      .map((option) =>
                        typeof option !== "number"
                          ? option.toUpperCase()
                          : option
                      )
                      .join(", ")
                  : fObj !== "priceRange"
                  ? fObj.toUpperCase()
                  : "PRICE RANGE"}
              </span>
            ) : (
              <div className="flex flex-row justify-between w-full">
                <span>
                  {selectedOption.length !== 0
                    ? selectedOption
                        .map((option) =>
                          typeof option !== "number"
                            ? option.toUpperCase()
                            : option
                        )
                        .join(", ")
                    : fObj !== "priceRange"
                    ? fObj.toUpperCase()
                    : "PRICE RANGE"}
                </span>
                {open ? (
                  <i
                    className="fa fa-angle-up pl-2 mt-0.5 lg:text-2xl lg:font-bold"
                    aria-hidden="true"
                  ></i>
                ) : (
                  <i
                    className="fa fa-angle-down pl-2 mt-0.5 lg:text-2xl lg:font-bold"
                    aria-hidden="true"
                  ></i>
                )}
              </div>
            )}
          </Listbox.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {open && (
              <div className="flex flex-col items-center w-full text-4xl lg:text-xl lg:items-start">
                <Listbox.Options className="w-full" static>
                  {colectedFilters[fObj].map((selection) => (
                    <Listbox.Option
                      onClick={() => {
                        handleSelectOption(selection);
                      }}
                      className="cursor-pointer py-1 w-full"
                      key={selection}
                      value={selection}
                    >
                      {typeof selection !== "number"
                        ? selection.toUpperCase()
                        : selection}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            )}
          </Transition>
        </>
      )}
    </Listbox>
  );
}
