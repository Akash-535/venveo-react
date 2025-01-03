import React, { useState } from 'react'
import { THREE_CARDS_LIST } from '../utils/helper'
import Discription from '../common/Discription'
import { ButtonArrowIcon } from '../utils/icons'

const ThreeCards = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => setShowMore((prev) => !prev);
    const displayedCards = showMore ? THREE_CARDS_LIST : THREE_CARDS_LIST.slice(0, 1 , 2);
    return (
        <div className='py-[60px] max-w-[1440px] mx-auto max-lg:pt-10 max-md:pt-6 max-sm:pt-4 max-md:pb-[50px]'>
            <div className='flex w-full justify-between max-xl:justify-center max-xl:flex-col max-xl:items-center max-xl:gap-7 max-lg:hidden'>
                {THREE_CARDS_LIST.map((obj, i) => (
                    <div key={i} className={`bg-cover bg-no-repeat min-h-[551px] w-full max-w-[440px] p-7 flex items-end justify-center ${i === 0 ? "bg-multi-chanel" : i === 1 ? "bg-lead-gen" : "bg-ecommerce"}`}>
                        <div className='bg-white p-7 pt-9 w-full rounded-3xl'>
                            <p className='text-custom-sm font-maisonMedium uppercase text-pacific-blue pb-[15px]'>{obj.heading}</p>
                            <p className='text-3xl font-light font-maisonLight leading-custom-xs max-w-[320px] pb-[15px]'>{obj.subHeading}</p>
                            <Discription textTwo={obj.description} />
                            <button className={`flex items-center text-custom-sm font-maisonMedium gap-1.5 leading-custom-xl hover:gap-4 duration-300 ease-linear ${i === 0 ? "pt-[83.91px]" : i === 1 ? "pt-11" : "pt-11"}`}>{obj.button} <span><ButtonArrowIcon /></span></button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex gap-3 items-center justify-center flex-wrap flex-col lg:hidden'>
                {displayedCards.map((obj, i) => (
                    <div key={i} className={`bg-cover bg-no-repeat min-h-[240px] w-full max-w-[360px]  flex items-end justify-end pr-0 pl-28 pt-5 pb-4 ${i === 0 ? "bg-multi-chanel" : i === 1 ? "bg-lead-gen" : "bg-ecommerce"}`}>
                        <div className='bg-white p-6 w-full rounded-l-3xl'>
                            <p className='text-custom-sm font-maisonMedium uppercase text-pacific-blue pb-[15px]'>{obj.heading}</p>
                            <p className='text-2xl font-light font-maisonLight leading-custom-xs max-w-[201px] pb-[15px]'>{obj.subHeading}</p>
                            <button className={`flex items-center text-custom-sm font-maisonMedium gap-1.5 leading-custom-xl hover:gap-4 duration-300 ease-linear pt-5`}>{obj.button} <span><ButtonArrowIcon /></span></button>
                        </div>
                    </div>
                ))}</div>
            <button className='text-xl text-center flex items-baseline justify-center w-full mx-auto gap-1 text-custom-sm leading-custom-xs font-maisonMedium pt-9 lg:hidden' onClick={toggleShowMore}>{(showMore ? "Less More Resources" : "Show More Resources")} <span className={`${showMore ? "rotate-180" : ""} duration-300 ease-linear text-[6px]`}>▼</span></button>
        </div>
    )
}

export default ThreeCards