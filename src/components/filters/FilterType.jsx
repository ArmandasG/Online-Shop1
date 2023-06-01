import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { type } from '../../assets/selections'
import { color } from '../../assets/selections'
import { size } from '../../assets/selections'
import { brand } from '../../assets/selections'
import { gender } from '../../assets/selections'

const colectedFilters = {
    type: [],
    color: [],
    size: [],
    brand: [],
    gender: [],
    price: [],
}

export function FilterType({fObj}) {
    const [selectedType, setSelectedType] = useState([])
    const [selectedFiltersAll, setSelectedFiltersAll] = useState(colectedFilters)
  
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
          {type.map((type) => (
            <Listbox.Option className='border cursor-pointer' key={type} value={type}>
              {type}
              {/* bandyti padaryti su if*/}
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