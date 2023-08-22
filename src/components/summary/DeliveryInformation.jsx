import { useFormik } from 'formik';
import React from 'react'
import Directory from './Directory';
import { useItemsCtx } from '../../store/ItemsContextProvider';
import { cities } from '../../assets/cities';

function DeliveryInformation() {
  const { setCartIsOpen, cartIsOpen, navigate, setShippingInformation, shippingInformation, setShippingInfo } = useItemsCtx();
  function openCartNav () {
    const cartNav = document.getElementById("myCartNav")
    if (cartIsOpen === false) {
      cartNav.style.width = '100%'
      setCartIsOpen(true);
    }
  };
    const formik = useFormik({
        initialValues: {
            email: '',
            keepMeUpdated: false,
            mobilePhoneNumber: '',
            firstName: '',
            lastName: '',
            address: '',
            addressExtra: '',
            city: '',
            country: '',
            postalCode: '',
            saveInformation: false,
        },
        onSubmit: (values, { resetForm, setSubmitting }) => {
            console.log('values ===', values);
            setShippingInformation([values]);
            saveShippingInfo(values, setSubmitting);
            navigate("/cart/shipping");
            console.log('shippingInformation ===', shippingInformation);
        }
    })

    function saveShippingInfo(ShippingInfoValuesObj) {
      setShippingInfo({
        email: ShippingInfoValuesObj.email,
        keepMeUpdated: ShippingInfoValuesObj.keepMeUpdated,
        mobilePhoneNumber: ShippingInfoValuesObj.mobilePhoneNumber,
        firstName: ShippingInfoValuesObj.firstName,
        lastName: ShippingInfoValuesObj.lastName,
        address: ShippingInfoValuesObj.address,
        addressExtra: ShippingInfoValuesObj.addressExtra,
        city: ShippingInfoValuesObj.city,
        country: ShippingInfoValuesObj.country,
        postalCode: ShippingInfoValuesObj.postalCode,
        saveInformation: ShippingInfoValuesObj.saveInformation,
      });
    }
  return (
    <div className="">
      <Directory />
      <div className='container py-8 bg-white'>
      <h2 className='text-2xl text-gray-500'>{"Contact Information".toUpperCase()}</h2>
    <form className='mt-4 space-y-4 ' onSubmit={formik.handleSubmit}>
      <input className="p-4 border border-black w-full" placeholder='Email' type="email" id='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} />
      <label className='flex'>
      <input checked={formik.values.keepMeUpdated} name='keepMeUpdated' className="mr-2 w-6 h-6 border-2 border-gray appearance-none checked:bg-black" type="checkbox" onChange={formik.handleChange} />
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
            <select
              className="p-4 border border-black w-full"
              type="text"
              id="country"
              name="country"
              placeholder="Country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" disabled>
                Select Country
              </option>
              
                <option value="Lithuania">
                Lithuania
                </option>
                <option value="" disabled>
                Great Britain (available soon)
                </option>
            </select>
        <div className='flex gap-8'>
        <select
              className="p-4 border border-black w-full"
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" disabled>
                Select City
              </option>
              {formik.values.country === "Lithuania" ? cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              )) : ''}
              
            </select>
        <input className="p-4 border border-black w-full" placeholder='Postal code' type="number" id='postalCode' value={formik.values.postalCode} onBlur={formik.handleBlur} onChange={formik.handleChange} />
        </div>
        <label className='flex'>
      <input checked={formik.values.saveInformation} name='saveInformation' className="mr-2 w-6 h-6 border-2 border-gray appearance-none checked:bg-black" type="checkbox" onChange={formik.handleChange} />
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
      <button className="w-full tracking-wider font-semibold border py-4 bg-black text-white text-lg" type="submit">{"Continue to shipping".toUpperCase()}</button>
      </div>
    </form>
    </div>
  </div>
  )
}

export default DeliveryInformation