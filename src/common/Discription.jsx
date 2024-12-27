import React from 'react'

const Discription = ({ text, textTwo }) => {
    return (
        <>
            <p className='text-3xl leading-custom-xs font-light font-maisonLight max-md:text-2xl'>{text}</p>
            <p className='text-custom-sm leading-custom-xl font-normal font-maisonRegular'>{textTwo}</p>
        </>
    )
}

export default Discription