import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperPrevIcon, UsLbmIcon } from '../utils/icons';
import { ACTUAL_SLIDER_LIST } from '../utils/helper';
import Heading from '../common/Heading';
import Discription from '../common/Discription';

const ActualResult = () => {
    return (
        <div className="bg-cover bg-no-repeat bg-center bg-actual-result flex flex-col justify-center items-center overflow-hidden">
            <div className="container max-w-[1920px] mx-auto relative">
                <div className="text-center pt-[119px] max-xl:pt-20 max-lg:pt-14 max-md:pt-10 max-sm:pt-6 px-4 md:px-6 lg:px-0">
                    <h3 className="text-white font-maisonLight font-light text-lg sm:text-xl md:text-2xl lg:text-custom3xl leading-6 md:leading-[30px]">
                        Actual businesses.
                    </h3>
                    <div className='!text-white'>
                        <Heading text="Actual results." />
                    </div>
                    <div className='!text-white pt-4 sm:pt-6 md:pt-10'>
                        <Discription textTwo="Businesses trust Venveo to power growth." />
                    </div>
                </div>

                <div className="mx-auto flex items-center justify-center w-full pt-10 md:pt-[81px] px-4 sm:px-6 max-w-full lg:px-0">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50} // Reduced spaceBetween for better centering
                        centeredSlides={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Navigation, Pagination]}
                        className="mySwiper !pb-[60px] sm:!pb-[80px] lg:!pb-[100px]"
                    >
                        {ACTUAL_SLIDER_LIST.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="text-center w-full max-w-[992px] mx-auto px-4">
                                    <img
                                        src={slide.image}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full max-w-[320px] sm:max-w-[480px] lg:max-w-[640px] mx-auto"
                                    />
                                    <p className="text-white pt-6 sm:pt-8 lg:pt-[74px] font-maisonLight font-light max-w-[300px] sm:max-w-[450px] lg:max-w-[613px] mx-auto text-base sm:text-lg lg:text-3xl">
                                        {`"${slide.quote}"`}
                                    </p>
                                    <p className="text-white font-normal pt-4 sm:pt-5 font-maisonRegular text-sm sm:text-base lg:text-custom-sm">
                                        {slide.name},
                                    </p>
                                    <p className="text-white font-normal font-maisonRegular text-sm sm:text-base lg:text-custom-sm">
                                        {slide.title}
                                    </p>
                                    <p className="text-center pt-3 mx-auto flex items-center justify-center">
                                        <UsLbmIcon />
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-button-prev absolute left-4 md:left-8 !top-1/2 transform translate-y-[-50%] z-10 max-sm:!top-2/3">
                        <button className="bg-white rounded-r-[25px] flex items-center justify-center shadow-lg swiper-btn">
                            <SwiperPrevIcon />
                        </button>
                    </div>
                    <div className="swiper-button-next absolute right-4 md:right-8 !top-1/2 transform translate-y-[-50%] z-10 max-sm:!top-2/3">
                        <button className="bg-white rounded-r-[25px] flex items-center justify-center shadow-lg swiper-btn rotate-180">
                            <SwiperPrevIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActualResult;
