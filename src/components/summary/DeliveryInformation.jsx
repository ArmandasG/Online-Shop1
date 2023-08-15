import { useFormik } from 'formik';
import React from 'react'
import Directory from './Directory';
import { useItemsCtx } from '../../store/ItemsContextProvider';

function DeliveryInformation() {
  const countries = ['Lithuania' , 'Great Britain (available soon)']
  const { setCartIsOpen, cartIsOpen } = useItemsCtx();
  function openCartNav () {
    const cartNav = document.getElementById("myCartNav")
    if (cartIsOpen === false) {
      cartNav.style.width = '100%'
      setCartIsOpen(true)
    }
  };
    const formik = useFormik({
        initialValues: {
            email: '',
            keepMeUpdated: '',
            mobilePhoneNumber: '',
            toggle: false,
            firstName: '',
            lastName: '',
            address: '',
            addressExtra: '',
            city: '',
            location: 'Location',
            postalCode: '',
            saveInformation: '',
        },
        onSubmit: (values) => {
            console.log('values ===', values);
        }
    })
  return (
    <div className="">
      <Directory />
      <div className='container py-8 bg-white'>
      <h2 className='text-2xl text-gray-500'>{"Contact Information".toUpperCase()}</h2>
    <form className='mt-4 space-y-4 ' onSubmit={formik.handleSubmit}>
      <input className="p-4 border border-black w-full" placeholder='Email' type="email" id='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} />
      <label className='flex'>
      <input value={formik.values.keepMeUpdated} name='keepMeUpdated' className="mr-2 w-6 h-6 border-2 border-gray appearance-none checked:bg-black" type="checkbox" />
      <span className=' text-lg text-gray-500'>Keep me up to date on news and exclusive offers</span>
      </label>
      <input className="p-4 border border-black w-full" placeholder='Mobile phone number' type="phone" id='mobilePhoneNumber' value={formik.values.mobilePhoneNumber} onBlur={formik.handleBlur} onChange={formik.handleChange} />
      <div className='pt-8 space-y-4'>
        <h2 className='text-2xl text-gray-500'>{'Shipping Address'.toUpperCase()}</h2>
        <div className='flex gap-8'>
        <input className="p-4 border border-black w-full" placeholder='First name' type="text" id='firstName' value={formik.values.firstName} onBlur={formik.handleBlur} onChange={formik.handleChange} />
        <input className="p-4 border border-black w-full" placeholder='Last name' type="text" id='lastName' value={formik.values.lastName} onBlur={formik.handleBlur} onChange={formik.handleChange} />
        </div>
        <input className="p-4 border border-black w-full" placeholder='Address' type="text" id='address' value={formik.values.address} onBlur={formik.handleBlur} onChange={formik.handleChange} />
        <input className="p-4 border border-black w-full" placeholder='Apartment, suite, etc... (optional)' type="text" id='addressExtra' value={formik.values.addressExtra} onBlur={formik.handleBlur} onChange={formik.handleChange} />
        <input className="p-4 border border-black w-full" placeholder='City' type="text" id='city' value={formik.values.city} onBlur={formik.handleBlur} onChange={formik.handleChange} />
        <div className='flex gap-8'>
          {/* <input className="p-4 border border-black w-full" placeholder='Location' type="text" /> */}
          <select
              className="mt-2 w-full rounded border-2 py-2 pl-4 pr-8 font-normal sm:text-xs"
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              value={formik.values.location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" disabled>
                Select Country
              </option>
                <option value='Lithuania'>
                Lithuania
                </option>
                <option value='' disabled>
                Great Britain (available soon)
                </option>
              
            </select>
        <input className="p-4 border border-black w-full" placeholder='Postal code' type="number" id='postalCode' value={formik.values.postalCode} onBlur={formik.handleBlur} onChange={formik.handleChange} />
        </div>
        <label className='flex'>
      <input value={formik.values.saveInformation} name='saveInformation' className="mr-2 w-6 h-6 border-2 border-gray appearance-none checked:bg-black" type="checkbox" />
      <span className=' text-lg text-gray-500'>Save this information for next time</span>
      </label>
      </div>
      <div className='flex py-10'>
      <div className="flex gap-2 w-8/12 justify-center text-xl">
          <i className="fa fa-angle-left mt-5" aria-hidden="true"></i>
          <button onClick={() => openCartNav()} className="block underline" type='button'>
            Return To Cart
          </button>
        </div>
      <button className="tracking-wider font-semibold  border py-4 px-40 bg-black text-white w-full" type="submit">SEND</button>
      </div>
    </form>
    </div>
  </div>
  )
}

export default DeliveryInformation