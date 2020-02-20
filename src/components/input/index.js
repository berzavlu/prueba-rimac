import React from 'react'

const Input = ({ value, placeholder }) => {
  return (
    <React.Fragment>
      <input value={value} />
      <div className='input__placeholder'>{placeholder}</div>
    </React.Fragment>
  )
}

export default Input
