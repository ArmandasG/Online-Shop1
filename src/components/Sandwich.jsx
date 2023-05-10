import React from 'react'
import { NavLink } from 'react-router-dom'

function Sandwich() {
    function openNav () {
        document.getElementById("myNav").style.width = "100%";
    }
    function closeNav () {
        document.getElementById("myNav").style.width = "0%";
    }
  return (
  <div>
    <span className='cursor-pointer'><img onClick={openNav} src="/src/icons/Group 6.svg" alt="" /></span>
    <section id='myNav' className='overlay flex-col'>
        <div onClick={closeNav} className='closeBtn cursor-pointer ml-4 container mt-4'><img src="/src/icons/Group 1419.svg" alt="" /></div>
        <div className='mt-2 ml-2 container'>
        <NavLink className='text-4xl' to={'/clothes'}>Clothes</NavLink>
        <div className='pl-2 pt-2'>
        <p>Jackets</p>
        <p>Shirts</p>
        <p>Pants</p>
        <p>Shoes</p>
        </div>
        </div>
    </section>
    </div>
  )
}

export default Sandwich