import { useFormik } from 'formik';
import React from 'react'

function JoinUsPage() {
    const formik = useFormik({
        initialValues: {
            email: '',
            message: '',
        },
        onSubmit: (values) => {
            console.log('values ===', values);
        },
        validate: (values) => {
            const errors = {};

            if (!values.email) {
                errors.email = "Email is required";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
                errors.email = 'Invalid email format';
            }
            if (!values.message) {
                errors.message = 'Message is required'
            }

            return errors
        }
    })
    
  return (
    <div className='min-h-screen container'>

        <img src="/icons/join_us.jpg" alt="join us" />
        <h2 className='text-center text-4xl mt-4'>Join Us</h2>
        <p className='text-center p-8 text-2xl'>We are always searching for people who would have ideas on how to improve and could provide us with a breeze of fresh air</p>
        <form className='mt-4 space-y-8 ' onSubmit={formik.handleSubmit}>
    <div className="flex flex-col space-y-8">
        <div className='w-full'>
        <input className={`${formik.touched.email && formik.errors.email ? 'border-red-600 focus-visible:outline-red-600' : ''} border p-3 border-black w-full`} type="email" id='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Email *' />
        <div className="h-1">
    {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600 text-base">{formik.errors.email}</div>
          ) : null}
    </div>
        </div>
    <div className='w-full'>
    <input className={`${formik.touched.message && formik.errors.message ? 'border-red-600 focus-visible:outline-red-600' : ''} border p-3 pb-20 border-black w-full`} type="textarea" id='message' value={formik.values.message} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Message *' />
    <div className="h-1">
    {formik.touched.message && formik.errors.message ? (
            <div className="text-red-600 text-base">{formik.errors.message}</div>
          ) : null}
    </div>
    </div>
    
    </div>
    <button className="tracking-wider font-semibold  border py-4 px-40 bg-black text-white w-full" type="submit">CONTACT</button>
    </form>
    </div>
  )
}

export default JoinUsPage