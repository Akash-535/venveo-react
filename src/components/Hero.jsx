import React from 'react'
import Header from '../common/Header'

const Hero = () => {
    return (
        <div className='bg-ocean'>
            <div className='max-w-[1920px] mx-auto relative h-[869px] max-lg:h-[750px] max-md:h-[550px] max-sm:h-[640px]'>
                <div className='max-w-[1358px] mx-auto'>
                    <Header myClass='absolute top-0 right-0 ' />
                    <img src="./assets/images/left-vector.webp" alt="star1" className='h-[698px] max-md:w-[500px] max-md:h-[500px] max-sm:h-[261px] max-sm:w-[261px] max-sm:-left-[122px] max-sm:-top-4 bg-cover bg-no-repeat w-[698px] absolute -left-80 -top-[60px]' />
                    <img
                        src="./assets/images/bottom-vector.webp"
                        alt='half-star'
                        className='absolute bottom-0 right-0 h-[150px] max-sm:h-32 max-md:hidden'
                    />
                    <h1 className='max-md:text-6xl max-sm:text-[60px] max-sm:leading-[52px] font-bold text-[120px] leading-[104px] text-white font-schmal max-w-[822px] mx-auto text-center relative pt-[39px] pb-7 max-sm:pt-[51px]'>
                        MAKE MARKETING A{' '}
                        <span className='relative'>
                            GROWTH{' '}
                            <img
                                src="./assets/images/hero-text-line.webp"
                                alt='green-line'
                                className='h-5 absolute left-1/2 -translate-x-1/2'
                            />
                        </span>
                        MACHINE
                    </h1>
                    <p className='relative max-w-[656px] mx-auto text-center text-white text-2xl max-md:text-[22px] leading-[30px] font-maisonLight pb-6 max-sm:pb-[30px] max-sm:leading-7 max-lg:px-4'>
                        We focus on results. Not just chatter. Elevate your business with
                        our top-tier services and tech. Get a proposal now.
                    </p>
                    <form
                        action='#'
                        className='flex items-center border-2 rounded-[50px] border-white  pr-[37.95px] relative mx-auto max-w-[448px] max-sm:px-6 max-md:mx-4'
                    >
                        <input
                            type='text'
                            placeholder='Enter Your Website' required
                            className='bg-transparent w-full h-full py-[22px] sm:pl-[34.27px] max-sm:py-[22px] outline-none font-maisonBook text-[15px] leading-5 text-white text-opacity-40'
                        />
                        <button className='font-maisonDemi text-[15px] leading-5 text-white'>
                            Analyze
                        </button>
                    </form>
                </div>
                <div className='absolute -bottom-4 z-0 w-full left-0'>
                    <img src="./assets/images/hero-botton-line.webp" alt='single-line' className='absolute w-full' />
                </div>
                <div className='absolute left-1/2 -translate-x-1/2 h-[490px] w-full max-w-[871px] max-lg:h-96 max-md:h-64 max-sm:h-[329px] max-sm:w-[328px] -bottom-[245px] max-lg:-bottom-[192px] max-md:-bottom-[123px] max-sm:-bottom-[203px]'>
                    <div className='relative'>
                        <img
                            src="./assets/images/brand-logo.webp"
                            alt='made-for-brands'
                            className='h-[107px] absolute left-[-50px] bottom-[48.5px] max-lg:left-10 max-md:h-14 max-md:left-[17%] max-md:bottom-[7%] max-sm:-bottom-6 max-sm:left-[62%] max-sm:h-[107px]'
                        />
                        <img
                            src="./assets/images/hero-img.webp"
                            alt='hero-Image'
                            className='h-[490px] object-cover max-lg:h-96 max-md:h-64 max-sm:h-[329px] mx-auto max-w-[871px] w-full'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero