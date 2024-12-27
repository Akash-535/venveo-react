import React from 'react'

const OutSmartInput = () => {
    return (
        <div className='mt-32 bg-out-side w-full h-full py-[72px] justify-center flex bg-cover bg-no-repeat bg-center'>
            <div className='flex justify-between w-full relative max-w-[1100px] mx-auto max-lg:flex-col max-lg:px-4'>
                <div className='flex flex-col  justify-center'>
                    <p className='max-lg:hidden text-custom-sm  leading-custom-xs'>Get a free competitive analysis on your market</p>
                    <p className='lg:hidden text-custom-sm  leading-custom-xs'>Get Your Custom Marketing Plan</p>
                    <p className='max-lg:hidden text-custom-3xl font-light font-maisonLight max-md:text-3xl'>Outsmart your competition</p>
                    <p className='lg:hidden text-custom-3xl font-light font-maisonLight max-md:text-3xl'>Start earning more money now</p>
                </div>
                <img className='max-lg:hidden absolute left-[45%] top-1/2 ' src="./assets/images/input-arrow.webp" alt="input-arrow" />
                <img className='lg:hidden absolute left-[47%] top-[22%] ' src="./assets/images/input-lg-arrow.webp" alt="input-arrow" />
                <form className='flex items-center border-2 rounded-[50px] bg-white pr-[26px] pl-7 max-w-[448px] w-full max-sm:px-6 py-[22px] max-lg:mx-auto max-lg:mt-20'>
                    <input
                        type='text'
                        placeholder='Enter Your Website' required
                        className='bg-transparent w-full h-full outline-none text-custom-sm placeholder:text-custom-sm leading-5 placeholder:text-black placeholder:font-maisonRegular font-maisonRegular'
                    />
                    <button className='max-lg:hidden font-maisonMedium text-[15px] leading-5'>
                        Analyze
                    </button>  <button className='lg:hidden font-maisonMedium text-[15px] leading-5'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default OutSmartInput