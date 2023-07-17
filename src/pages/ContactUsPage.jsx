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
    }
})
  return <div className="min-h-screen">
    <div className="mb-20 mt-10 bg-no-repeat bg-cover w-full h-96 bg-center bg-[url('icons/Contact_us.png')]">
    </div>
    <h2 className="font-medium text-3xl mb-10">CONTACT</h2>
    <form className='mt-4 space-y-8 ' onSubmit={formik.handleSubmit}>
      <div className="flex justify-between gap-3">
    <input className="border p-3 border-black w-full" type="text" id='firstName' value={formik.values.firstName} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Name' />
    <input className="border p-3 border-black w-full" type="email" id='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Email' />
    </div>
    <div className="flex flex-col space-y-8">
    <input className="border p-3 border-black" type="number" id='phone' value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Phone' />
    <input className="border p-3 pb-20 border-black" type="textarea" id='message' value={formik.values.message} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Message' />
    </div>
    <button className="tracking-wider font-semibold  border py-4 px-40 bg-black text-white w-full" type="submit">SEND</button>
    </form>
  </div>;
}

export default ContactUsPage;
