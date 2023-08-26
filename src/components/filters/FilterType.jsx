import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { type, color, size, brand, gender, priceRange } from "../../assets/selections";

const colectedFilters = {
  color,
  size,
  brand,
  gender,
  type,
  priceRange,
};

export function FilterType({ fObj, onFilter }) {
  const [selectedOption, setSelectedOption] = useState([])
  
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
  }

  return (
    <Listbox value={selectedOption} onChange={setSelectedOption} multiple>
      {({ open }) => (
        <>
          <Listbox.Button className="border-b flex flex-col p-2 w-80 items-center">
            {selectedOption.length !== 0 ? selectedOption.map(option => option.toUpperCase()).join(", ") : (fObj !== 'priceRange' ? fObj.toUpperCase() : 'PRICE RANGE')}
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
              <div className="flex flex-col w-80 items-center">
                <Listbox.Options static>
                  {colectedFilters[fObj].map((selection) => (
                    <Listbox.Option
                      onClick={() => {
                        handleSelectOption(selection);
                      }}
                      className="cursor-pointer py-1 "
                      key={selection}
                      value={selection}
                    >
                      {selection.toUpperCase()}
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
