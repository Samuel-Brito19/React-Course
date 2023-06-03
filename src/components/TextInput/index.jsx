import P from 'prop-types'
import './style.css'
import React from 'react'

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className='text-input'
      value={searchValue}
      type="search"
      onChange={handleChange}
    />
  )
}

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired
}
