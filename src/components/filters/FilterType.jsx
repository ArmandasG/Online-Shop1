import { useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { type } from '../../assets/selections'
import { color } from '../../assets/selections'
import { size } from '../../assets/selections'
import { brand } from '../../assets/selections'
import { gender } from '../../assets/selections'
import { priceRange } from '../../assets/selections'

const colectedFilters = {
    color, size, brand, gender, type, priceRange
}

export function FilterType({fObj, onFilter}) {
    const [selectedType, setSelectedType] = useState([])
    const [currentFilters, setCurrentFilters] = useState([])
    const [allSelectedOptions, setAllSelectedOptions] = useState([]);

useEffect(() => {
  const categories = [];

  Object.values(colectedFilters).forEach((filter) => {
    filter.forEach((option) => {
      if (selectedType.includes(option)) {
        categories.push(option);
      }
    });
  });
console.log('categories ===', categories);
  setCurrentFilters(categories);
}, [selectedType]);

console.log('currentFilters ===', currentFilters);


// STRIGIMO VIETA

    return (
      <Listbox value={selectedType} onChange={setSelectedType} multiple>
        {({ open }) => (
            <>
        <Listbox.Button className='border block'>
        {selectedType.length !== 0 ? selectedType.join(', ') : fObj}
        {/* {selectedType.join(', ')} */}
        </Listbox.Button>
        <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        {open && (<div>
        <Listbox.Options static>
          {colectedFilters[fObj].map((type) => (
            <Listbox.Option className='border cursor-pointer' key={type} value={type}>
              {type}
            </Listbox.Option>
          ))}
        </Listbox.Options>
        </div>)}
        </Transition>
        </>
        )}
      </Listbox>
    )
  }