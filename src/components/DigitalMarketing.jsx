import React, { useState } from 'react'
import Discription from '../common/Discription'
import Heading from '../common/Heading'
import { DIGITAL_MARKETING_LIST } from '../utils/helper'
import { ButtonArrowIcon } from '../utils/icons'

const DigitalMarketing = () => {
     const [showMore, setShowMore] = useState(false);
        const toggleShowMore = () => setShowMore((prev) => !prev);
        const displayedCards = showMore ? DIGITAL_MARKETING_LIST : DIGITAL_MARKETING_LIST.slice(0, 1 , 2 ,3);
    return (
        <div className='pt-[132px] max-lg:pt-28 max-md:pt-20 max-sm:pt-16'>
            <div className='text-center max-w-[641px] mx-auto max-lg:px-4'>
                <Discription text="Problems we solve." />
                <div className='max-w-[439px] mx-auto pt-0.5 pb-5'>
                    <Heading text="Digital Marketing for today’s Business" />
                </div>
                <Discription textTwo="We help companies scale their strategies across multiple channels to drive more revenue, more quickly, without cutting corners." />
            </div>
            <div className='relative'>
                <img className='absolute w-full left-0 top-36 max-lg:top-4' src="./assets/images/digital-line.webp" alt="double-line" />
                <div className="flex flex-wrap gap-x-[66px] gap-y-[57px] max-md:gap-6 justify-center pt-[88px] max-lg:pt-12 max-md:pt-10 max-sm:mx-4 max-w-[1440px] mx-auto max-lg:hidden">
                    {DIGITAL_MARKETING_LIST.map((obj, i) => (
                        <div
                            key={i}
                            className={`border-2 relative z-40 max-w-[503px] h-[506px] max-lg:h-full bg-white border-pacific-blue rounded-[25px] pl-[48px] ps-[38px] max-md:p-10 max-sm:p-7 pt-[65px] pb-[54px] max-xl:w-full ${i === 1 ? 'pe-[71px] pt-[65px] pb-[48px]' : i === 2 ? 'pe-[67px] pb-[39px]' : i === 3 ? 'pe-[71px] pb-[39px]' : 'pe-[71px]'}`}>
                            <div className="flex items-start gap-6 max-sm:flex-col">
                                <div>{obj.logo}</div>
                                <div>
                                    <div className='pb-3.5'><Discription text={obj.subHeading} /></div>
                                    <Discription textTwo={obj.description} />
                                    <ul className="list-disc pl-5 mt-7 max-w-[285px] max-sm:max-w-none">
                                        <li className='font-semibold text-black leading-[20px] text-customsm font-maisonBold'>{obj.liOne}</li>
                                        <li className='font-semibold text-black leading-[20px] text-customsm font-maisonBold'>{obj.liTwo}</li>
                                        <li className='font-semibold text-black leading-[20px] text-customsm font-maisonBold'>{obj.liThree}</li>
                                    </ul>
                                    <button className={`font-maisonMedium ease-linear duration-300 hover:gap-6 flex items-center gap-2 max-md:mt-8 max-sm:mt-6 text-customsm font-semibold leading-[20px] ${i === 2 ? 'mt-[29px]' : 'mt-[33px]'}`}>
                                        {obj.button} <ButtonArrowIcon />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap max-md:gap-6 justify-center pt-[88px] max-lg:pt-12 max-md:pt-10 max-sm:mx-4 max-w-[1440px] mx-auto lg:hidden gap-y-10 max-sm:gap-y-7">
                    {displayedCards.map((obj, i) => (
                        <div
                            key={i}
                            className={`border-2 relative z-40 max-w-[503px] h-[506px] max-lg:h-full bg-white border-pacific-blue rounded-[25px] pl-[48px] ps-[38px] max-md:p-10 max-sm:p-7 pt-[65px] pb-[54px] max-xl:w-full ${i === 1 ? 'pe-[71px] pt-[65px] pb-[48px]' : i === 2 ? 'pe-[67px] pb-[39px]' : i === 3 ? 'pe-[71px] pb-[39px]' : 'pe-[71px]'}`}>
                            <div className="flex items-start gap-6 max-sm:flex-col">
                                <div>{obj.logo}</div>
                                <div>
                                    <div className='pb-3.5'><Discription text={obj.subHeading} /></div>
                                    <Discription textTwo={obj.description} />
                                    <ul className="list-disc pl-5 mt-7 max-w-[285px] max-sm:max-w-none">
                                        <li className='font-semibold text-black leading-[20px] text-customsm font-maisonBold'>{obj.liOne}</li>
                                        <li className='font-semibold text-black leading-[20px] text-customsm font-maisonBold'>{obj.liTwo}</li>
                                        <li className='font-semibold text-black leading-[20px] text-customsm font-maisonBold'>{obj.liThree}</li>
                                    </ul>
                                    <button className={`font-maisonMedium ease-linear duration-300 hover:gap-6 flex items-center gap-2 max-md:mt-8 max-sm:mt-6 text-customsm font-semibold leading-[20px] ${i === 2 ? 'mt-[29px]' : 'mt-[33px]'}`}>
                                        {obj.button} <ButtonArrowIcon />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className='text-xl text-center flex items-baseline gap-1 justify-center w-full mx-auto text-custom-sm leading-custom-xs font-maisonMedium pt-11 lg:hidden' onClick={toggleShowMore}>{(showMore ? "Less More Resources" : "Show More Resources")} <span className={`${showMore ? "rotate-180" : ""} duration-300 ease-linear text-[6px]`}>▼</span></button>
            </div>
        </div>
    )
}

export default DigitalMarketing