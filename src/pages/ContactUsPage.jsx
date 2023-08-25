import { useFormik } from "formik";
import * as Yup from 'yup';

function ContactUsPage() {
  const formik = useFormik({
    initialValues: {
        firstName: '',
        email: '',
        phone: '',
        message: '',
    },
    onSubmit: (values) => {
        console.log('values ===', values);
    },
    validate: (values) => {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = "Name is required";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Invalid email format';
      }

      if (!values.message) {
        errors.message = 'Message is required'
      }

      return errors;
    }
})
  return <div className="min-h-screen container">
    <div className="mb-20 mt-10 bg-no-repeat bg-cover w-full h-96 bg-center bg-[url('/icons/Contact_us.png')]">
    </div>
    <h2 className="font-medium text-3xl mb-10">CONTACT</h2>
    <form className='mt-4 space-y-6 ' onSubmit={formik.handleSubmit}>
      <div className="flex justify-between gap-3">
        <div className="w-full flex flex-col">
    <input className={`${formik.touched.firstName && formik.errors.firstName ? 'border-red-600 focus-visible:outline-red-600' : ''} border p-3 border-black w-full`} type="text" id='firstName' name="firstName" value={formik.values.firstName} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Name *' />
    <div className="h-1">
    {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-600 text-base">{formik.errors.firstName}</div>
          ) : null}
    </div>
    </div>
    <div className="w-full">
    <input className={`${formik.touched.email && formik.errors.email ? 'border-red-600 focus-visible:outline-red-600' : ''} border p-3 border-black w-full`} type="email" id='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Email *' />
    <div className="h-1">
    {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600 text-base">{formik.errors.email}</div>
          ) : null}
    </div>
    </div>
    </div>
    <div className="flex flex-col space-y-7">
      <div className="w-full">
      <input className="border p-3 border-black w-full" type="number" id='phone' value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Phone' />
      </div>
      <div className="w-full">
      <input className={`${formik.touched.message && formik.errors.message ? 'border-red-600 focus-visible:outline-red-600' : ''} border p-3 pb-20 border-black w-full`} type="textarea" id='message' value={formik.values.message} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Message *' />
      <div className="h-1">
    {formik.touched.message && formik.errors.message ? (
            <div className="text-red-600 text-base">{formik.errors.message}</div>
          ) : null}
    </div>
      </div>
    
    </div>
    <button className="tracking-wider font-semibold  border py-4 px-40 bg-black text-white w-full" type="submit">SEND</button>
    </form>
  </div>;
}

export default ContactUsPage;
