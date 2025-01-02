import React from 'react'
import Discription from '../common/Discription'
import Heading from '../common/Heading'
import { SATISFIED_CLIENT_LIST } from '../utils/helper'
import { ButtonArrowIcon } from '../utils/icons'

const SatisfiedClient = () => {
    return (
        <div className='pt-[177px] max-lg:px-4 max-lg:pt-32 max-md:pt-24 max-sm:pt-16'>
            <div className='text-center'>
                <Discription text="Driving digital revenue for over" />
                <div className='relative pt-1.5 max-w-[560px] mx-auto'>
                    <Heading text="1,400+ satisfied clients." />
                    <img className='absolute left-[12%] -translate-x-1/2 pt-2.5 max-md:hidden' src="./assets/images/red-line.webp" alt="" />
                </div>
            </div>
            <div
                className='pt-[88px] flex w-full gap-[60px] flex-wrap justify-center max-lg:gap-10 max-md:gap-6 max-sm:gap-4 max-lg:pt-14 max-md:pt-12 max-sm:pt-8'>
                {SATISFIED_CLIENT_LIST.map((obj, i) => (
                    <div key={i} className={`bg-amber-book bg-cover bg-no-repeat !w-[440px] px-7 py-[34px] max-md:px-5 ${i === 1 ? "bg-farns-worth" : i === 2 ? "bg-us-lbm" : ""}`}>
                        <div className='bg-white pt-[38px] pb-[31px] px-7 rounded-3xl text-start relative'>
                            <p className={` font-maisonMedium font-semibold text-custom-sm -translate-y-[3.2rem] absolute max-md:hidden ${i === 0 ? "pb-[7px] pt-2 px-3 bg-black text-white w-40 text-xs rounded-full leading-custom-3xl -translate-y-14" : ""}`}>{obj.heading}</p>
                            <div className='pb-6'>{obj.logo}</div>
                            <Discription text={obj.subHeading} />
                            <div className='pt-6'>
                                <Discription textTwo={obj.description} />
                            </div>
                            <button className='pt-[52px] flex items-center gap-2 hover:gap-4 duration-300 ease-linear text-custom-sm leading-custom-xl font-maisonMedium'>{obj.button}<ButtonArrowIcon /></button>
                        </div>
                        <div className='flex justify-between pt-3 px-4'>
                            <div>
                                <p className='text-[50px] font-bold font-sohne leading-custom-xxs max-md:text-[40px]'>{obj.lead}</p>
                                <p className='text-custom-sm leading-custom-xs font-medium font-maisonMedium'>{obj.leadText}</p>
                            </div>
                            <div>
                                <p className='text-[50px] font-bold font-sohne leading-custom-xxs max-md:text-[40px]'>{obj.adLead}</p>
                                <p className='text-custom-sm leading-custom-xs font-medium font-maisonMedium'>{obj.adLeadText}</p>
                            </div>
                            <div>
                                <p className='text-[50px] font-bold font-sohne leading-custom-xxs max-md:text-[40px]'>{obj.webTraffic}</p>
                                <p className='text-custom-sm leading-custom-xs font-medium font-maisonMedium'>{obj.webTrafficText}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SatisfiedClient