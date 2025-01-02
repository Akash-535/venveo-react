import React from 'react'
import { ButtonArrowIcon } from '../utils/icons'

const LearnFromUs = () => {
    return (
        <div className='pt-[109px] max-lg:pt-20 max-md:pt-16 max-sm:pt-[50px] relative'>
             <img className='absolute w-full left-0 top-1/2 max-lg:hidden' src="./assets/images/digital-line.webp" alt="double-line" />
        <h1 className='text-[80px] text-center font-bold font-sohne leading-86 '>Learn from us.</h1>
        <p className='leading-[133%] text-[15px] text-center font-maisonRegular mt-[13px] '>Digital marketing resources from Venveo to help you grow.</p>
        <button className='flex mx-auto gap-2.5 items-center mt-9 text-custom-sm font-maisonMedium leading-custom-xl max-md:mt-8'>
        See All
            <ButtonArrowIcon/>
             </button>
        <div className="relative max-w-[1322px] mx-auto mt-[81px] bg-learn-from bg-cover bg-no-repeat bg-center min-h-[520px] flex justify-normal items-end pl-7 pb-8 max-md:p-4 max-md:min-h-[565px] max-lg:mt-14 max-md:mt-6">
              <img src="./assets/images/brand-logo.webp" alt="made for brands" className='absolute right-[5%] top-[-4%] max-w-[107px] max-sm:hidden' />
          <div className=''>
              <div className="bg-white p-[35px_28px_31px_29px] rounded-[25px] max-md:p-[30px_24px_26px_25px] max-md:max-w-[339px]">
                <p className='uppercase text-custom-sm font-semibold font-maisonMedium text-pacific-blue leading-custom-xl '>guides</p>
                <h2 className='max-w-[323px] text-3xl leading-custom-xs text-black font-light font-maisonLight my-[15px] max-md:text-2xl max-md:my-1.5 max-md:leading-[108%]'>Marketing to Contractors and <span className='md:block'>Installers:</span><span className='max-md:block'>The Ultimate Guide</span></h2>
                <p className='text-custom-sm leading-custom-xl font-maisonRegular font-normal max-w-[315px]'>Understanding the process and maximize the opportunities</p>
                <button className='flex items-center gap-1.5 text-custom-sm leading-custom-xl font-maisonMedium hover:gap-4 duration-300 ease-linear mt-7 max-md:mt-4'>Read More <ButtonArrowIcon/></button>
              </div>
          </div>
        </div>
    </div>
    )
}

export default LearnFromUs