import React from 'react'
import Discription from '../common/Discription'
import Heading from '../common/Heading'
import { DIGITAL_MARKETING_LIST } from '../utils/helper'
import { ButtonArrowIcon } from '../utils/icons'

const DigitalMarketing = () => {
    return (
        <div className='pt-[132px]'>
            <div className='text-center max-w-[641px] mx-auto max-lg:px-4'>
                <Discription text="Problems we solve." />
                <div className='max-w-[439px] mx-auto pt-0.5 pb-5'>
                    <Heading text="Digital Marketing for today’s Business" />
                </div>
                <Discription textTwo="We help companies scale their strategies across multiple channels to drive more revenue, more quickly, without cutting corners." />
            </div>
            <div>
                <div className="flex flex-wrap gap-x-[66px] gap-y-[57px] max-md:gap-6 justify-center pt-[88px] max-lg:pt-12 max-md:pt-10 max-sm:mx-4 max-w-[1440px] mx-auto">
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
            </div>
        </div>
    )
}

export default DigitalMarketing