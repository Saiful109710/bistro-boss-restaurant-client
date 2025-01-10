import React from 'react'

const SectionTitle = ({subheading,heading}) => {
  return (
    <div className='md:w-3/12 mx-auto text-center my-10 '>
        <p className='text-yellow-600 mb-2'>--- {subheading} ---</p>
        
        <h2 className='text-3xl uppercase border-y-4 py-4 border-dotted'>{heading}</h2>
    </div>
  )
}

export default SectionTitle
