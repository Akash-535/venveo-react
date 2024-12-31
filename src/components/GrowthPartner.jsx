import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ButtonArrow, ButtonNetworkIcon, LogoIpsumIcon } from '../utils/icons';
import Heading from '../common/Heading';
import Discription from '../common/Discription';

const GrowthPartner = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState(3);

    const tabNames = ['Industry Expertise', 'ROI Focused', 'Proprietary Technology'];

    useEffect(() => {
        const tabParam = searchParams.get('tab');
        const tabIndex = tabNames.findIndex((name) => name === tabParam);
        if (tabIndex >= 0) {
            setActiveTab(tabIndex + 1);
        }
    }, [searchParams]);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
        setSearchParams({ tab: tabNames[tabIndex - 1] });
    };

    const renderTabContent = () => {
        if (activeTab === 1) {
            return (
                <div className='bg-cover bg-no-repeat bg-center xl:bg-smartest max-xl:bg-smartest-sm w-full max-w-[1280px] max-xl:h-full h-[720px] mx-auto'>
                    <div className='ps-[79px] pt-[75px] max-xl:p-12 max-md:p-8 max-sm:p-5'>
                        <h3 className='text-white font-bold text-custom-7xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl font-sohne leading-[70px] max-w-[415px] uppercase'>the smartest minds in the
                            industry</h3>
                        <p className='max-w-[360px] font-light text-3xl max-md:text-2xl text-white leading-custom-xs font-maisonLight'>Answer our questions and listen to our answers.</p>
                        <p className='max-w-[360px] mt-[31px] font-normal text-custom-sm font-maisonRegular leading-custom-xl text-white'>This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.</p>
                        <button className='transition-all ease-linear duration-200 hover:bg-offGreen max-lg:mb-6 max-sm:px-5 max-sm:py-4 max-sm:max-w-[245px] text-white font-medium font-maisonMedium text-custom-sm flex items-center p-[29.5px]  border border-solid max-w-[256px] bg-[#FF4242] border-[#FF4242] gap-[10px] mt-[58px]'><ButtonNetworkIcon /> Subscribe to Podcast <span className='text-[6px]'>▼</span></button>
                        <div>
                            <img src="./assets/images/patners-logo-img.webp" alt="logo" className=' xl:hidden mx-auto' />
                            <img src="./assets/images/tab-one-card.webp" alt="card" className='xl:hidden max-w-[320px] max-[425px]:max-w-[295px] mt-5 mx-auto' />
                        </div>
                    </div>
                </div>
            );
        }

        if (activeTab === 2) {
            return (
                <div className='bg-cover bg-no-repeat bg-center xl:bg-smartest-two max-xl:bg-smartest-two-sm w-full max-w-[1337px] max-xl:h-full h-[720px] mx-auto'>
                    <div className='pt-[75px] ps-[89px] max-xl:p-12 max-md:p-8 max-sm:p-5'>
                        <h3 className='text-white font-bold text-custom8xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl font-sohne leading-[70px]'>Proven Results</h3>
                        <p className='max-w-[360px] font-light text-custom3xl max-md:text-2xl max-xl:pb-7 text-white leading-[30px]'>Not hopes and prayers.</p>
                        <img src="./assets/images/data-group.webp" alt="data" className='xl:hidden mx-auto' />
                    </div>
                </div>
            );
        }

        if (activeTab === 3) {
            return (
                <div className='xl:bg-project-radar max-xl:bg-project-radar-sm max-xl:h-full bg-cover bg-center bg-no-repeat w-full max-w-[1337px] h-[720px] mx-auto'>
                    <div className='flex items-center justify-between max-md:flex-wrap'>
                        <div className='pt-[75px] ps-[79px] max-xl:p-12 max-md:p-8 max-sm:p-5 flex-col flex'>
                            <h3 className='text-white font-bold text-custom8xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl font-sohne leading-[70px]'>Project radar</h3>
                            <p><LogoIpsumIcon /></p>
                            <p className='pt-[162px] max-xl:pt-24 max-lg:pt-16 max-md:pt-11 max-sm:pt-8 max-w-[360px] font-light text-custom3xl max-md:text-2xl text-white leading-[30px]'>Lorem ipsum what this
                                product actually does.</p>
                            <p className='font-normal text-customsm leading-[20px] text-white font-maisonLight max-w-[360px] mt-[14px]'>This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.</p>
                            <button className='transition-all ease-linear duration-200 hover:bg-offGreen max-xl:mb-6 mt-[57px] flex items-center text-black text-custom-sm font-semibold font-maisonMedium leading-[15px] py-[31px] gap-[10px] px-[28px] border border-solid bg-[#D2F038] border-[#D2F038] max-w-[274px] button-arrow'>Call to Action Somewhere <ButtonArrow /> </button>

                        </div>
                        <div className='xl:hidden'>
                            <img src="./assets/images/card-data-img.webp" alt="card-data" className='' />
                        </div>
                    </div>
                </div>
            );
        }

        return null;
    };

    return (
        <div className='pt-[113px] pb-[60px]  max-lg:pt-20 max-md:pt-16 max-sm:py-16 max-sm:px-4'>
            <div className='text-center flex flex-col gap-1.5'>
                <Heading text="The growth partner " />
                <Discription text='you’ve been looking for.' />
                <div className='mt-[41px] max-lg:mt-[19px]'>
                    <Discription textTwo="Businesses trust Venveo to power grow." />
                </div>
            </div>

            <div className='tabs-parent mt-[105px] max-xl:mt-16 max-lg:mt-10 max-md:mt-8 relative z-20'>
                <div className='relative max-md:overflow-x-scroll max-md:mx-auto flex items-center justify-center gap-[78px] max-lg:gap-14 max-md:gap-9 max-lg:justify-between max-lg:pb-11'>
                    <p
                        className={`text-lg max-sm:text-base font-semibold  text-black opacity-35 leading-[18px] font-maisonBold cursor-pointer whitespace-nowrap ${activeTab === 1 ? 'text-black !opacity-100' : ''
                            }`}
                        onClick={() => handleTabClick(1)}
                    >
                        Industry Expertise
                        {activeTab === 1 && (
                            <img
                                src="./assets/images/red-line.webp"
                                alt="redline"
                                className="mx-auto absolute"
                            />
                        )}
                    </p>
                    <p
                        className={`text-lg max-sm:text-base font-semibold text-black opacity-35 leading-[18px] font-maisonBold cursor-pointer whitespace-nowrap ${activeTab === 2 ? 'text-black !opacity-100' : ''
                            }`}
                        onClick={() => handleTabClick(2)}
                    >
                        ROI Focused
                        {activeTab === 2 && (
                            <img
                                src="./assets/images/red-line.webp"
                                alt="redline"
                                className="mx-auto absolute -translate-x-6"
                            />
                        )}
                    </p>
                    <p
                        className={`text-lg max-sm:text-base font-semibold text-black opacity-35 leading-[18px] font-maisonBold cursor-pointer whitespace-nowrap ${activeTab === 3 ? 'text-black !opacity-100' : ''
                            }`}
                        onClick={() => handleTabClick(3)}
                    >
                        Proprietary Technology
                        {activeTab === 3 && (
                            <img
                                src="./assets/images/red-line.webp"
                                alt="redline"
                                className="mx-auto absolute"
                            />
                        )}
                    </p>
                </div>

                <div className='lg:mt-[57px]'>{renderTabContent()}</div>
            </div>
            <img src="./assets/images/growth-green-line-1.webp" alt="line " className='w-full absolute z-0  -translate-y-5 max-sm:hidden' />
            <img src="./assets/images/growth-green-line-2.webp" alt="line" className='w-full mt-2 max-sm:hidden' />
        </div>
    );
};

export default GrowthPartner;
