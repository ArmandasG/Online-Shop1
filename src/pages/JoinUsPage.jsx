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
        }
    })
  return (
    <div className='min-h-screen'>

        <img src="/public/icons/join_us.jpg" alt="join us" />
        <h2 className='text-center text-4xl mt-4'>Join Us</h2>
        <p className='text-center p-8 text-2xl'>We are always searching for people who would have ideas on how to improve and could provide us with a breeze of fresh air</p>
        <form className='mt-4 space-y-8 ' onSubmit={formik.handleSubmit}>
    <div className="flex flex-col space-y-8">
    <input className="border p-3 border-black w-full" type="email" id='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Email' />
    <input className="border p-3 pb-20 border-black" type="textarea" id='message' value={formik.values.message} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Message' />
    </div>
    <button className="tracking-wider font-semibold  border py-4 px-40 bg-black text-white w-full" type="submit">CONTACT</button>
    </form>
    </div>
  )
}

export default JoinUsPage