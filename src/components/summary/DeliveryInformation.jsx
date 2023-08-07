import { useFormik } from 'formik';
import React from 'react'

function DeliveryInformation() {
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

export default DeliveryInformation