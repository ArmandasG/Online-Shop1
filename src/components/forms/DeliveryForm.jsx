import { useFormik } from 'formik';
import React from 'react'

function DeliveryForm() {
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
    <div className="min-h-screen">
    <form className='mt-4 space-y-8 ' onSubmit={formik.handleSubmit}>
    </form>
  </div>
  )
}

export default DeliveryForm