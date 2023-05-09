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
    <span><img onClick={openNav} src="/src/icons/Group 6.svg" alt="" /></span>
    <section id='myNav' className='overlay flex-col'>
        <div onClick={closeNav} className='closeBtn'><img src="/src/icons/Group 1419.svg" alt="" /></div>
        <div>
        <NavLink to={'/clothes'}>Clothes</NavLink>
        </div>
    </section>
    </div>
  )
}

export default Sandwich