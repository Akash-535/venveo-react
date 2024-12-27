import React from 'react'
import Header from '../common/Header'

const Hero = () => {
    return (
        <div className='bg-ocean relative'>
            <div className='max-w-[1440px] mx-auto relative pb-[322px] max-md:pb-52 max-sm:pb-[175px]'>
                <Header myClass='absolute top-0 right-0 ' />
                <div className='max-w-[1358px] px-4 mx-auto'>
                    <img src="./assets/images/left-vector.webp" alt="star1" className='h-[698px] max-md:w-[500px] max-md:h-[500px] max-sm:h-[261px] max-sm:w-[261px] max-sm:-left-[122px] max-sm:-top-4 bg-cover bg-no-repeat w-[698px] absolute -left-80 -top-[60px]' />
                    <img src="./assets/images/bottom-vector.webp" alt="half-star" className='absolute bottom-0 right-0 h-[150px] max-sm:h-32 ' />
                    <h1 className='max-lg:text-7xl max-sm:text-[60px] max-sm:leading-[52px] font-bold text-[120px] leading-[104px] text-white font-sohne max-w-[822px] mx-auto text-center relative pt-[39px] pb-7 max-sm:pt-[51px]'>
                        MAKE MARKETING <span className='block'>
                            A{' '}
                            <span className='relative'>
                                GROWTH{' '}
                                <img
                                    src="./assets/images/hero-text-line.webp"
                                    alt='green-line'
                                    className='h-5 absolute left-1/2 -translate-x-1/2'
                                />
                            </span>
                            MACHINE
                        </span>
                    </h1>
                    <p className='relative max-w-[656px] mx-auto text-center text-white text-2xl max-md:text-[22px] leading-[30px] font-maisonLight pb-6 max-sm:pb-[30px] max-sm:leading-7 max-lg:px-4'>
                        We focus on results. Not just chatter. Elevate your business with
                        our top-tier services and tech. Get a proposal now.
                    </p><form className='flex items-center border-2 rounded-[50px] border-white  pr-[37.95px] relative mx-auto max-w-[448px] max-sm:px-6 '>
                        <input
                            type='text'
                            placeholder='Enter Your Website' required
                            className='bg-transparent w-full h-full py-[22px] sm:pl-[34.27px] max-sm:py-[22px] outline-none text-custom-sm placeholder:text-custom-sm leading-5 text-white text-opacity-40 placeholder:font-maisonRegular font-maisonRegular'
                        />
                        <button className='font-maisonMedium text-[15px] leading-5 text-white'>
                            Analyze
                        </button>
                    </form>
                </div>
                <div className='absolute left-1/2 -translate-x-1/2 h-[490px] w-full max-w-[871px] max-lg:h-96 max-md:h-64 max-sm:h-[329px] max-sm:w-[328px] -bottom-[245px] max-lg:-bottom-[192px] max-md:-bottom-[123px] max-sm:-bottom-[203px]'>
                    <div className='relative max-xl:px-4'>
                        <img src="./assets/images/brand-logo.webp" alt="made-for-brands" className='h-[107px] max-sm:h-[107px] absolute -left-[50px] max-lg:left-10 bottom-[47px] max-md:h-14 max-md:left-[17%] max-md:bottom-[7%] max-sm:-bottom-6 max-sm:left-[62%]' />
                        <img src="./assets/images/hero-img.webp" alt="hero" className='object-cover h-[490px] max-w-[871px] w-full max-lg:h-96 max-md:h-64 max-sm:h-[329px] mx-auto' />
                    </div>
                </div>
            </div>
            <div className='absolute -bottom-4 -z-10 w-full'>
                <img src="./assets/images/hero-botton-line.webp" alt="single-line" className='absolute w-full' />
            </div>
        </div>
    )
}

export default Hero