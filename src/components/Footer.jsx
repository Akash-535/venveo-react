import React, { useState } from 'react'
import { FOOTER_LIST, FOOTER_MOBILE_LIST, MEDIA_ICON_LIST } from '../utils/helper'
import { FooterVenveoIcon } from '../utils/icons'
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [mobileList , setMobileList] = useState(null)
    const listToggle = (index) => {
        setMobileList(mobileList === index ? null : index)
    }
  return (
      <footer className='bg-ocean max-lg:px-4'>
          <div className='max-w-[1321px] mx-auto pt-[90px] pb-[105px] max-xl:pt-20 max-xl:pb-24 max-lg:pb-[86px] max-lg:py-16 max-md:pt-14'>
              <div className='flex max-xl:flex-wrap-reverse max-xl:justify-center'>
                  <div className='w-8/12 max-lg:w-full flex gap-[82px] max-md:gap-5 max-sm:flex-wrap max-sm:justify-center max-sm:items-center max-md:hidden'>
                      {FOOTER_LIST.map((obj, i) => (
                          <div key={i} className='w-3/12 max-lg:w-full'>
                              <h3 className='text-white text-xs font-medium leading-[108%] uppercase font-maisonMedium'>{obj.title}</h3>
                              <ul className='pt-5'>
                                  <li><Link to="/" className='text-white font-light font-maisonLight text-custom-sm leading-[30px] hover:text-lemon-lime duration-300 ease-linear'>{ obj.list}</Link></li>
                                  <li><Link to="/" className='text-white font-light font-maisonLight text-custom-sm leading-[30px] hover:text-lemon-lime duration-300 ease-linear'>{ obj.listTwo}</Link></li>
                                  <li><Link to="/" className='text-white font-light font-maisonLight text-custom-sm leading-[30px] hover:text-lemon-lime duration-300 ease-linear'>{ obj.listThree}</Link></li>
                                  <li><Link to="/" className='text-white font-light font-maisonLight text-custom-sm leading-[30px] hover:text-lemon-lime duration-300 ease-linear'>{ obj.listFour}</Link></li>
                                  <li><Link to="/" className='text-white font-light font-maisonLight text-custom-sm leading-[30px] hover:text-lemon-lime duration-300 ease-linear'>{ obj.listFive}</Link></li>
                              </ul>
                         </div>
                     ))}
                  </div>
                  <div className='w-8/12 max-lg:w-full flex gap-[82px] max-md:gap-5 max-sm:flex-wrap max-sm:justify-center max-sm:items-center md:hidden sm:text-center text-start'>
                      {FOOTER_MOBILE_LIST.map((obj, i) => (
                          <div key={i} className='w-3/12 max-lg:w-full'>
                              <h3 onClick={() => listToggle(i)} className='text-lemon-lime text-xs font-medium leading-[108%] uppercase font-maisonMedium'>{obj.title}</h3>
                              <ul className={`overflow-hidden duration-300 ease-linear flex flex-col gap-6 ${mobileList === i ? "max-h-[300px] pt-5":"max-h-0"}`}>
                                  <li className='flex gap-4 items-center'>{obj.icon}<Link to="/" className='text-white font-light font-maisonLight text-custom-sm leading-[30px] hover:text-lemon-lime duration-300 ease-linear'>{ obj.list}</Link></li>
                                  <li className='flex gap-4 items-center'>{obj.iconTwo}<Link to="/" className='text-white font-light font-maisonLight text-custom-sm leading-[30px] hover:text-lemon-lime duration-300 ease-linear'>{ obj.listTwo}</Link></li>
                                  <li className='flex gap-4 items-center'>{obj.iconThree}<Link to="/" className='text-white font-light font-maisonLight text-custom-sm leading-[30px] hover:text-lemon-lime duration-300 ease-linear'>{ obj.listThree}</Link></li>
                                  <li className='flex gap-4 items-center'>{obj.iconFour}<Link to="/" className='text-white font-light font-maisonLight text-custom-sm leading-[30px] hover:text-lemon-lime duration-300 ease-linear'>{ obj.listFour}</Link></li>
                                  <li className='flex gap-4 items-center'>{obj.iconFive}<Link to="/" className='text-white font-light font-maisonLight text-custom-sm leading-[30px] hover:text-lemon-lime duration-300 ease-linear'>{ obj.listFive}</Link></li>
                              </ul>
                         </div>
                     ))}
                  </div>
                  <div className='max-xl:pb-20'>
                      <h2 className='text-white text-3xl font-normal font-maisonLight text-center'>Get weekly data <span className='max-sm:block'>— and insights.</span></h2>
                      <form className='w-[449px] max-xl:max-w-[449px] max-xl:w-full mt-[35px] rounded-full border-2 flex items-center justify-between bg-transparent border-solid border-white px-7 max-md:px-5 max-lg:mt-7 max-md:mt-6 max-sm:mt-5'>
                          <input type="email" required placeholder='Enter Your Email' className='placeholder:text-white placeholder:font-normal outline-none w-full  text-white placeholder:text-custom-sm bg-transparent py-[18px] placeholder:font-maisonRegular font-maisonRegular max-sm:py-5' />
                          <button className='bg-transparent text-lemon-lime font-semibold text-custom-sm leading-custom-xl w-28 font-maisonMedium'>Get Started</button> 
                      </form>
                  </div>
              </div>
              <div className='pt-20 w-full flex justify-between items-end px-4 max-[769px]:hidden'>
                <div>
                    <Link to="#" aria-label='learn more about Venveo' className='pb-0.5'><FooterVenveoIcon/></Link>
                    <p className='max-w-[415px] text-white text-[13px] font-normal font-maisonLight leadin-[153%] pt-5'>Venveo is an award-winning digital marketing <span className='block'>solutions provider. Since 2003.</span>
                    ©{currentYear} Venveo</p>
                </div>
                <div className='flex gap-14'>
                    <ul>
                        <p className='uppercase text-sm leading-[108%] text-white font-maisonMedium font-medium pb-0.5'>Visit</p>
                        <li className='pt-7'><Link to="/" className='text-white font-light font-maisonLight text-[13px] leading-[153%px]'>100 N Main Street <span className='block'>#201 </span>
                        Blacksburg, VA 24060</Link></li>
                    </ul>
                    <ul>
                        <p className='uppercase text-sm leading-[108%] text-white font-maisonMedium font-medium pb-0.5'>contact</p>
                        <li className='pt-7'><Link to="mailto:info@venveo.com" className='text-white font-light font-maisonLight text-[13px] leading-[153%px] hover:text-lemon-lime duration-300 ease-linear border-b border-lemon-lime'>info@venveo.com</Link></li>
                        <li className='pt-5'><Link to="tel:+4733378901" className='text-white font-light font-maisonLight text-[13px] leading-[153%px] hover:text-lemon-lime duration-300 ease-linear border-b border-lemon-lime'>1 · 800 · 123 · 4567</Link></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-8 items-center'>
                    <div className='flex gap-8'>
                        <Link to="/" aria-label='all rights reserved' className='text-white text-[13px] font-maisonMedium font-medium leading-[153%] hover:text-lemon-lime duration-300 ease-linear'>All Rights Reserved</Link>
                        <Link to="/" aria-label='privacy policy' className='text-white text-[13px] font-maisonMedium font-medium leading-[153%] hover:text-lemon-lime duration-300 ease-linear'>Privacy Policy</Link>
                    </div>
                    <div className='flex gap-[34px]'>
                        {MEDIA_ICON_LIST.map((obj, i) => (
                            <Link key={i} to={obj.link} aria-label={obj.lable} target='_blank' className='text-white text-[13px] font-maisonMedium font-medium leading-[153%] hover:scale-125 duration-300 ease-linear media-link'>{obj.icon}</Link>
                        ))}
                    </div>
                </div>
              </div>
              <div className='min-[769px]:hidden pt-16 justify-center items-center flex flex-col'>
              <div className='flex gap-14 flex-col text-center'>
                    <ul>
                        <p className='uppercase text-sm leading-[108%] text-white font-maisonMedium font-medium'>Visit</p>
                        <li className='pt-5'><Link to="/" className='text-white font-light font-maisonLight text-custom-sm leading-custom-xl'>100 N Main Street <span className='block'>#201 </span>
                        Blacksburg, VA 24060</Link></li>
                    </ul>
                    <ul>
                        <p className='uppercase text-sm leading-[108%] text-white font-maisonMedium font-medium pb-0.5'>contact</p>
                        <li className='pt-7'><Link to="mailto:info@venveo.com" className='text-white font-light font-maisonLight text-[13px] leading-[153%px] hover:text-lemon-lime duration-300 ease-linear border-b border-lemon-lime'>info@venveo.com</Link></li>
                        <li className='pt-5'><Link to="tel:+4733378901" className='text-white font-light font-maisonLight text-[13px] leading-[153%px] hover:text-lemon-lime duration-300 ease-linear border-b border-lemon-lime'>1 · 800 · 123 · 4567</Link></li>
                    </ul>
                </div>
                <div className='flex gap-[34px] pt-16'>
                        {MEDIA_ICON_LIST.map((obj, i) => (
                            <Link key={i} to={obj.link} aria-label={obj.lable} target='_blank' className='text-white text-[13px] font-maisonMedium font-medium leading-[153%] hover:scale-125 duration-300 ease-linear media-link'>{obj.icon}</Link>
                        ))}
                    </div>
                    <div className='flex items-center justify-center flex-col text-center pt-14'>
                    <Link to="#" className='pb-0.5'><FooterVenveoIcon/></Link>
                    <p className='max-w-[415px] text-white text-[13px] font-normal font-maisonLight leadin-[153%] pt-3'>Venveo is an award-winning digital marketing <span className='block'>solutions provider. Since 2003.</span>
                    ©{currentYear} Venveo</p>
                </div>
                <div className='flex gap-8 pt-9'>
                        <Link to="#" aria-label='all rights reserved' className='text-white text-[13px] font-maisonMedium font-medium leading-[153%] hover:text-lemon-lime duration-300 ease-linear'>All Rights Reserved</Link>
                        <Link to="#" aria-label='privacy policy' className='text-white text-[13px] font-maisonMedium font-medium leading-[153%] hover:text-lemon-lime duration-300 ease-linear'>Privacy Policy</Link>
                    </div>
              </div>
          </div>
   </footer>
  )
}

export default Footer