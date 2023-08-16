import React from 'react'
import Directory from './Directory'
import { useItemsCtx } from '../../store/ItemsContextProvider'
import { useFormik } from 'formik'

function ShippingMethod() {
  const { navigate, setDeliveryFee, deliveryFee } = useItemsCtx()
  const formik = useFormik({
    initialValues: {
      deliveryMethod: 'atsiimt'
    },
    onSubmit: (values) => {
        console.log('values ===', values);
        navigate("/cart/payment")
        // setPaymentInformation([values]);
        // console.log('shippingInformation ===', shippingInformation);
        console.log('deliveryFee ===', deliveryFee);
    }
})

const handleDeliveryMethodChange = (event) => {
  const { value } = event.target;
  console.log('value ===', value);
  if (value === 'atsiimt') 
  {setDeliveryFee(0)} else if (value === 'dpdLiet') {setDeliveryFee(9.68)} else if (value === 'LPExpr')
  {setDeliveryFee(9.69)}
  formik.handleChange(event)
};
  return (
    <div>
      <Directory />
      <div className='flex flex-col container bg-white pt-10 text-xl'>
        <div className='border border-black px-4'>
        <div className='flex justify-between py-5 border-b-2 border-gray-400'>
          <h3 className='w-2/12'>Contact</h3>
          <span className='w-8/12'>example@example.com</span>
          <button onClick={() => navigate('/cart/information')} className='underline'>Change</button>


        </div>
        <div className='flex justify-between py-5'>
        <h3 className='w-2/12'>Ship To</h3>
          <span className='w-8/12'>Adreso g. 24, Šiauliai, Lithuania</span>
          <button onClick={() => navigate('/cart/information')} className='underline'>Change</button>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
      <div className='my-8'>
        <h2 className='mb-4'>{'Shipping Method'.toUpperCase()}</h2>
        <div className='border px-4 flex flex-col divide-y-2 divide-gray-400 border-black'>
          <div className='flex justify-between py-4'>
<input className='appearance-none border w-8 h-8 bg-white checked:bg-black rounded-full' type="radio" value='dpdLiet' name='deliveryMethod' id='dpd' checked={formik.values.deliveryMethod === 'dpdLiet'} onChange={handleDeliveryMethodChange} />
<label htmlFor="dpd">DPD Lietuva</label>
<span>9.68 Eur</span>
</div>
<div className='flex justify-between py-4'>
<input className='appearance-none border w-8 h-8 bg-white checked:bg-black rounded-full' type="radio" value='LPExpr' name='deliveryMethod' id='lpexp' checked={formik.values.deliveryMethod === 'LPExpr'} onChange={handleDeliveryMethodChange} />
<label htmlFor="lpexp">LP EXPRESS</label>
<span>9.69 Eur</span>
</div>
<div className='flex justify-between py-4'>
<input className='appearance-none border w-8 h-8 bg-white checked:bg-black rounded-full' type="radio" value='atsiimt' name='deliveryMethod' id='atsiimti' checked={formik.values.deliveryMethod === 'atsiimt'} onChange={handleDeliveryMethodChange} />
<label htmlFor="atsiimti">Atsiimti parduotuvėje</label>
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