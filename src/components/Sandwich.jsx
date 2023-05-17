import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Disclosure, Transition  } from '@headlessui/react'

function Sandwich() {

    function openNav () {
        document.getElementById("myNav").style.width = "100%";
    }
    function closeNav () {
        document.getElementById("myNav").style.width = "0%";
    }
    // console.log('document.getElementById("myNav").style.width ===', document.getElementById("myNav").style.width);

  return (
  <div>
    <span className='cursor-pointer'><img onClick={openNav} src="/src/icons/Group 6.svg" alt="" /></span>
    <section id='myNav' className='overlay flex-col'>
        <div onClick={closeNav} className='closeBtn cursor-pointer ml-4 container mt-4'><img src="/src/icons/Group 1419.svg" alt="" /></div>
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
        <ul className={`pl-2 pt-2 transition-all duration-300`}>
        <li>Jackets</li>
        <li>Shirts</li>
        <li>Pants</li>
        <li>Shoes</li>
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
        </div>
    </section>
    </div>
  )
}

export default Sandwich