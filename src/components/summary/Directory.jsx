import React from 'react'

function Directory() {
    const elementsToDisplay = ['Cart', 'Information', 'Shipping', 'Payment']
  return (
    <ul className='flex gap-4 container bg-white pt-10'>
        {elementsToDisplay.map((iObj, index) => (<li className='flex gap-4' key={iObj}><p className='text-2xl'>{iObj}</p><div className={`w-${index === elementsToDisplay.length - 1 ? 0 : 8} h-1 rounded-full bg-gray-300 mt-3.5 `}></div></li>))}
    </ul>
  )
}

export default Directory