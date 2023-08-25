import React, { useEffect } from 'react'
import Directory from './Directory'
import { useItemsCtx } from '../../store/ItemsContextProvider'
import { useFormik } from 'formik'
import { validate } from 'uuid'

function ShippingMethod() {
  const { navigate, setDeliveryFee, setDeliveryMethod, shippingInfo } = useItemsCtx()
  const formik = useFormik({
    initialValues: {
      deliveryMethod: ''
    },
    onSubmit: (values, {resetForm}) => {
        console.log('values ===', values);
        navigate("/cart/payment")
        setDeliveryMethod(values.deliveryMethod)
        resetForm()
    },
    validate: (values) => {
      const errors = {};

      if (!values.deliveryMethod) {
        errors.deliveryMethod = 'Please select a delivery method'
      }

      return errors

    }
    
})

const handleDeliveryMethodChange = (event) => {
  const { value } = event.target;
  console.log('value ===', value);
  if (value === 'Pick Up At Shop') 
  {setDeliveryFee([0])} else if (value === 'DPD Lietuva') {setDeliveryFee([9.68])} else if (value === 'LP Express')
  {setDeliveryFee([9.69])}
  formik.handleChange(event)
};
  return (
    <div>
      <Directory />
      <div className='flex flex-col container bg-white pt-10 text-xl'>
        <div className='border border-black px-4'>
        <div className='flex justify-between py-5 border-b-2 border-gray-400'>
          <h3 className='w-2/12'>Contact</h3>
          <span className='w-8/12'>{shippingInfo.email}</span>
          <button onClick={() => navigate('/cart/information')} className='underline'>Change</button>


        </div>
        <div className='flex justify-between py-5'>
        <h3 className='w-2/12'>Ship To</h3>
          <span className='w-8/12'>{shippingInfo.address}{shippingInfo.addressExtra !== '' ? ` - ${shippingInfo.addressExtra}` : '' }, {shippingInfo.city}, {shippingInfo.country} </span>
          <button onClick={() => navigate('/cart/information')} className='underline'>Change</button>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
      <div className='my-8'>
        <h2 className='mb-4'>{'Shipping Method'.toUpperCase()}</h2>
        <div className='border px-4 flex flex-col divide-y-2 divide-gray-400 border-black'>
          <div className='flex justify-between py-4'>
<input className='appearance-none border w-8 h-8 bg-white checked:bg-black rounded-full' type="radio" value='DPD Lietuva' name='deliveryMethod' id='dpd' checked={formik.values.deliveryMethod === 'DPD Lietuva'} onChange={handleDeliveryMethodChange} />
<label htmlFor="dpd">DPD Lietuva</label>
<span>9.68 Eur</span>
</div>
<div className='flex justify-between py-4'>
<input className='appearance-none border w-8 h-8 bg-white checked:bg-black rounded-full' type="radio" value='LP Express' name='deliveryMethod' id='lpexp' checked={formik.values.deliveryMethod === 'LP Express'} onChange={handleDeliveryMethodChange} />
<label htmlFor="lpexp">LP EXPRESS</label>
<span>9.69 Eur</span>
</div>
<div className='flex justify-between py-4'>
<input className='appearance-none border w-8 h-8 bg-white checked:bg-black rounded-full' type="radio" value='Pick Up At Shop' name='deliveryMethod' id='pickUp' checked={formik.values.deliveryMethod === 'Pick Up At Shop'} onChange={handleDeliveryMethodChange} />
<label htmlFor="pickUp">PICK UP at shop</label>
<span>0.00 Eur</span>
</div>
        </div>
        </div>
        <div className='py-8 bg-white'>
      <div className='flex py-10'>
      <div className="flex gap-2 w-8/12 justify-center text-xl">
          <i className="fa fa-angle-left mt-5" aria-hidden="true"></i>
          <button onClick={() => navigate(-1)} className="block underline" type='button'>
            Return To Billing
          </button>
        </div>
      <button className="w-full tracking-wider font-semibold border py-4 bg-black text-white text-lg" type="submit">{"Continue to payment".toUpperCase()}</button>
      </div>
      </div>
        </form>
      </div>
      
      
    </div>
  )
}

export default ShippingMethod