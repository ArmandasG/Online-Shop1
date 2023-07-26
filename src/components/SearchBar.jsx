import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup";

function SearchBar({searchValue}) {
    const formik = useFormik({
        initialValues: {
            searchResult: '',
        },
        validationSchema: Yup.object({searchResult: Yup.string()}),
        onSubmit: (values, { resetForm }) => {searchValue(values.searchResult), resetForm()}
    })
  return (
    <div className='pt-8 text-3xl'>
        <form onSubmit={formik.handleSubmit}>
            <div className='border-b'>
            <input className='pl-2 pr-24 focus:outline-0' id='searchResult' type="text" name='searchResult' onChange={formik.handleChange} placeholder='Looking for something ?' value={formik.values.searchResult} />
            <button type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
        </form>
        </div>
  )
}

export default SearchBar