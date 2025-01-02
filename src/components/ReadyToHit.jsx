import React from 'react'
import { ButtonArrow } from '../utils/icons'

const ReadyToHit = () => {
  return (
    <div className="bg-ready-to bg-cover bg-center bg-no-repeat box-border px-6">
    <div className='max-w-[1140px] mx-auto text-center flex py-[66px] gap-9 justify-center md:items-center max-lg:flex-col max-md:py-14 max-md:gap-7'>
        <h2 className='font-light text-white text-custom-3xl leading-custom-xs font-maisonLight max-md:text-3xl max-md:max-w-[219px] max-md:mx-auto'>Ready to hit your goals?</h2>
        <button className='px-[33px] py-7 flex items-center justify-center gap-2.5 bg-lemon-lime text-[15px] font-semibold font-maisonMedium transition-all duration-300 ease-linear button-arrow'>Book a Strategy Call 
            <ButtonArrow/>
        </button>
    </div>
</div>
  )
}

export default ReadyToHit