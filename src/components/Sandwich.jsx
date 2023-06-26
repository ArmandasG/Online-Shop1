import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Disclosure, Transition  } from '@headlessui/react'
import SearchBar from './SearchBar';
import { useItemsCtx } from '../store/ItemsContextProvider';

const selectOptions = [
  'All',
  'Jackets',
  'Shirts',
  'Pants',
  'Shoes',
]

function Sandwich() {
  const navigate = useNavigate()
  const { clothesArr, setClothesArr, resetClothes } = useItemsCtx()
  const [query, setQuery] = useState('')

    function openNav () {
        document.getElementById("myNav").style.width = "100%";
    }
    function closeNav () {
        document.getElementById("myNav").style.width = "0%";
    }
    // console.log('document.getElementById("myNav").style.width ===', document.getElementById("myNav").style.width);
    
// const [searchedEl, setSearchedEl] = useState([])

useEffect(() => {
  resetClothes()
  if (!query) {return}
  const filteredClothes = clothesArr.filter((clothes) => {
    return (
      clothes.category.toLowerCase().includes(query) ||
      clothes.color.toLowerCase().includes(query) ||
      clothes.brand.toLowerCase().includes(query)
    );
  });
  setClothesArr(filteredClothes)
}, [query]);

    async function searchEl(newSearchEl) {
      const searchElement = newSearchEl.toLowerCase()
      setQuery(searchElement)
    navigate("/clothes");
document.getElementById("myNav").style.width = "0%";
resetClothes()
    }
    
  return (
  <div>
    <span className='cursor-pointer'><img onClick={openNav} src="./icons/Group 6.svg" alt="" /></span>
    <section id='myNav' className='overlay flex-col'>
        <div onClick={closeNav} className='closeBtn cursor-pointer ml-4 container mt-4'><img src="./icons/Group 1419.svg" alt="" /></div>
        <div className='mt-2 ml-2 container flex flex-col items-start'>
        <Disclosure id='disc1'>
          {({ open, close }) => (<>
        <Disclosure.Button className='text-4xl'>Clothes</Disclosure.Button>
        <Transition
        enter="transition duration-300 ease-out"
        enterFrom="transform scale-y-95 opacity-0"
        enterTo="transform scale-y-100 opacity-100"
        leave="transition duration-100 ease-in"
        leaveFrom="transform scale-y-100 opacity-100"
        leaveTo="transform scale-y-95 opacity-0"
      >
        <Disclosure.Panel>
        <ul className={`pl-2 pt-2 flex-col transition-all duration-300`}>
        {selectOptions.map((sObj) => (
          <Link className='block' to={'/clothes'} onClick={closeNav} key={sObj}>{sObj}</Link>
        ))}
        </ul>
        </Disclosure.Panel>
        </Transition>
        </>
        )}
        </Disclosure> 
        <Disclosure id='disc2'>
          {({ open, close }) => (<>
        <Disclosure.Button className='text-4xl'>Campaigns</Disclosure.Button>
        <Transition
        enter="transition duration-300 ease-out"
        enterFrom="transform scale-y-95 opacity-0"
        enterTo="transform scale-y-100 opacity-100"
        leave="transition duration-100 ease-in"
        leaveFrom="transform scale-y-100 opacity-100"
        leaveTo="transform scale-y-95 opacity-0"
      >
        <Disclosure.Panel>
        <ul className={`pl-2 pt-2 transition-all duration-300`}>
        <li>Join us</li>
        <li>Read more</li>
        </ul>
        </Disclosure.Panel>
        </Transition>
        </>
        )}
        </Disclosure> 
        <Disclosure id='disc3'>
          {({ open, close }) => (<>
        <Disclosure.Button className='text-4xl'>Press</Disclosure.Button>
        <Transition
        enter="transition duration-300 ease-out"
        enterFrom="transform scale-y-95 opacity-0"
        enterTo="transform scale-y-100 opacity-100"
        leave="transition duration-100 ease-in"
        leaveFrom="transform scale-y-100 opacity-100"
        leaveTo="transform scale-y-95 opacity-0"
      >
        <Disclosure.Panel>
        <ul className={`pl-2 pt-2 transition-all duration-300`}>
        <li>What to know ?</li>
        <li>Where to find us ?</li>
        </ul>
        </Disclosure.Panel>
        </Transition>
        </>
        )}
        </Disclosure> 
        <SearchBar searchValue={searchEl}/>
        </div>
    </section>
    </div>
  )
}

export default Sandwich