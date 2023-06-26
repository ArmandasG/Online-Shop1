import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup";

function SearchBar() {
    const formik = useFormik({
        initialValues: {
            searchResult: '',
        },
        validationSchema: Yup.object({searchResult: Yup.string()}),
        onSubmit: (values) => {values},
    })
  return (
    <div className='pt-4'>
        <form onSubmit={formik.handleSubmit}>
            <div className='border-b'>
            <input className='pl-4 pr-24 focus:outline-0' id='searchResult' type="text" name='searchResult' onChange={formik.handleChange} placeholder='Looking for something ?' />
            <button type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
        </form>
        </div>
  )
}

export default SearchBar