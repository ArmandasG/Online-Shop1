import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import PropTypes from 'prop-types'
import { useRespCtx } from "../context/ResponsiveContextProvider";

function SearchBar({ searchValue }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { windowWidth } = useRespCtx()
  const formik = useFormik({
    initialValues: {
      searchResult: "",
    },
    validationSchema: Yup.object({ searchResult: Yup.string() }),
    onSubmit: (values, { resetForm }) => {
      searchValue(values.searchResult), resetForm();
    },
  });
  return (
    <div className="pt-8 text-3xl lg:text-2xl lg:pt-0 text-black">
      <div className="relative"></div>
      {windowWidth >= 1024 ?
<button onClick={() => setIsExpanded(!isExpanded)}>SEARCH</button>
     : <form onSubmit={formik.handleSubmit}>
        <div className="border-b">
          <input
            className={`pl-2 pr-24 focus:outline-0 ${
              isExpanded ? "expanded-input" : ""
            }`}
            id="searchResult"
            type="text"
            name="searchResult"
            onChange={formik.handleChange}
            placeholder="Looking for something ?"
            value={formik.values.searchResult}
          />
          <button type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </form> 
}
{windowWidth >= 1024 && (
        isExpanded && (
          <form onSubmit={formik.handleSubmit}>
            <div className="border-b">
              <input
                className="pl-2 pr-24 focus:outline-0"
                id="searchResult"
                type="text"
                name="searchResult"
                onChange={formik.handleChange}
                placeholder="Looking for something ?"
                value={formik.values.searchResult}
              />
              <button type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        )
      )}
    </div>
  );
}

SearchBar.propTypes = {
  searchValue: PropTypes.func.isRequired
}

export default SearchBar;
