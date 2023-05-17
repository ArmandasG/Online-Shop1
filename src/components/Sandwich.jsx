import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Sandwich() {
  const [myCat, setMyCat] = useState(false);
  const show = myCat === true ? '' : 'hidden'

    function openNav () {
        document.getElementById("myNav").style.width = "100%";
    }
    function closeNav () {
        document.getElementById("myNav").style.width = "0%";
        setMyCat(false);
    }

    function displayCat () {
      myCat === false ?
      setMyCat(true) : setMyCat(false)
    }
  return (
  <div>
    <span className='cursor-pointer'><img onClick={openNav} src="/src/icons/Group 6.svg" alt="" /></span>
    <section id='myNav' className='overlay flex-col'>
        <div onClick={closeNav} className='closeBtn cursor-pointer ml-4 container mt-4'><img src="/src/icons/Group 1419.svg" alt="" /></div>
        <div className='mt-2 ml-2 container'>
        <div onClick={displayCat} className='text-4xl'>Clothes</div>
        <ul className={`${show ? 'opacity-100' : 'opacity-0'} pl-2 pt-2 transition-all duration-300`}>
        <li>Jackets</li>
        <li>Shirts</li>
        <li>Pants</li>
        <li>Shoes</li>
        </ul>
        <p>blalblab</p>
        </div>
    </section>
    </div>
  )
}

export default Sandwich