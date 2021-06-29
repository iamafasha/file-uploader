import React from 'react'

export const ExampleComponent = ({ onFileChange }) => {
  const onChangeHandler = (e) => {
    onFileChange(e)
  }
  return (
    <div className='file-upload'>
      <input onChange={onChangeHandler} type='file' />
    </div>
  )
}
