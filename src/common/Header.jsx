import React, { useEffect, useState } from "react";
import { HEADER_LIST } from "../utils/helper";
import { ButtonArrow, LogoIcon, SearchIcon } from "../utils/icons";
import { Link } from "react-router-dom";

const Header = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const [open, setOpen] = useState(false);
    const toggleSidebar = () => {
        setOpen(!open);
        setActiveIndex(null);
    };
  useEffect(() => {
        const toggleSidebar = () => {
            if (open && window.innerWidth < 1024) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        toggleSidebar();
        window.addEventListener("resize", toggleSidebar);
        return () => {
            window.removeEventListener("resize", toggleSidebar);
        };
    }, [open]);
    return (
        <div className="max-w-[1920px] mx-auto relative z-10">
            <nav className="flex justify-between lg:items-start items-center pl-6 max-lg:px-4">
                {/* Logo */}
                <Link to="/" className="pt-[30px] max-xl:pt-4">
                    <LogoIcon />
                </Link>
                <div className="flex">
                    <div
                        className={`flex gap-[42px] max-lg:fixed max-lg:left-0 max-lg:h-full max-lg:w-full max-lg:flex-col lg:bg-white lg:py-7 px-10 max-lg:bg-gray-800 max-lg:duration-300 max-lg:justify-center max-lg:items-center z-10 max-lg:text-white ${open ? 'max-lg:top-0' : 'max-lg:top-full'}`}
                    >
                        {HEADER_LIST.map((item, index) => (
                            <div key={index} className="relative">
                                <button
                                    onClick={() => handleClick(index)}
                                    className="hover:text-gray-600 transition-colors relative z-[51] duration-200 focus:outline-none font-maisonMedium"
                                >
                                    {item.name}
                                </button>
                                {item.subMenu && activeIndex === index && (
                                    <div className="absolute left-0 mt-2 w-48 z-[52] bg-white text-gray-800 rounded shadow-lg">
                                        {item.subMenu.map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                               to="#"
                                                aria-label='click to about more'
                                                onClick={() => setActiveIndex(null)}
                                                className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200 font-maisonMedium"
                                            >
                                                {subItem}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="max-lg:hidden cursor-pointer hover:scale-110 duration-300 ease-linear searchs">
                            <SearchIcon />
                        </div>
                        <form action="" className="w-full flex justify-between items-center lg:hidden max-w-40 bg-Platinum py-1.5 px-2.5">
                            <input type="text" placeholder="Search" className="!outline-none !bg-transparent w-full placeholder:text-gray-400 text-gray-400" required />
                            <button >
                                <SearchIcon />
                            </button>
                        </form>
                        <button className="lg:hidden py-7 bg-lemon-lime pl-[33.97px] pr-[34px] flex items-center gap-1.5 text-custom-sm leading-custom-xs button-arrow font-maisonMedium text-black">Let’s Talk <ButtonArrow /></button>
                    </div>
                    <button className="max-lg:hidden bg-lemon-lime pl-[33.97px] pr-[34px] flex items-center gap-1.5 text-custom-sm leading-custom-xs button-arrow font-maisonMedium">Let’s Talk <ButtonArrow /></button>
                </div>
                <div onClick={toggleSidebar} className='z-[15] flex-col gap-3 lg:hidden flex'>
                    <span className={`${open ? 'w-[31px] h-0.5 bg-white rotate-[-138deg] translate-y-[12.5px] duration-300 ease-linear rounded' : 'w-[31px] h-0.5 bg-white duration-300 ease-linear rounded'}`}></span>
                    <span className={`${open ? 'w-[31px] h-0.5 bg-white rotate-[138deg] -translate-y-[2px] duration-300 ease-linear rounded' : 'w-[31px] h-0.5 bg-white duration-300 ease-linear rounded'}`}></span>
                </div>
            </nav>
        </div>
    );
};

export default Header;