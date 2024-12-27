import React from 'react'
import { FEATURED_LOGO_LIST } from '../utils/helper'

const FeaturedLogos = () => {
    return (
        <div className='pt-[314px] max-md:pt-60 max-sm:pt-[259px] brands relative'>
            <div className='max-w-[1025px] mx-auto overflow-hidden'>
                <p className='text-custom-sm font-normal text-center leading-custom-xs font-maisonRegular'>Featured in</p>
                <div className='flex justify-between items-start featured-logos pt-12 gap-28 px-4 max-lg:gap-16 max-md:gap-12 max-sm:gap-9 max-lg:pt-8 max-md:pt-5'>
                    {FEATURED_LOGO_LIST.map((obj, i) => (
                        <div key={i}>
                            {obj}
                        </div>
                    ))}
                </div>
            </div>
            <img src="./assets/images/double-line.webp" alt="line" className='absolute -bottom-1/4 max-lg:-bottom-12 max-md:-bottom-8 w-full' />
        </div>
    )
}

export default FeaturedLogos