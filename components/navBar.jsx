'use client'

import '@styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';



const navBar = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [toggleDropdownMenu, setToggleDropdownMenu] = useState(false);

    return (
        <nav className="flex items-center justify-center gap-4 pt-3 w-full bg-primary-color">
            {/*1920px*/}
            <Link href="/" className="md:flex pb-6 hidden">
                <img src="/img/logo.png" alt="mhm logo" width={200} />
            </Link>
            <div className="w-[340px] h-[40px] md:flex hidden mb-6">
                <input type="text" placeholder='Tìm kiếm sản phẩm' className="xl:w-[300px] md:w-10/12 h-[40px] rounded-l-lg pl-4" />
                <button className="w-[40px] h-[40px] bg-white rounded-r-lg">
                    <Image
                        src="/icons/search.svg"
                        alt='search icon'
                        width={20}
                        height={20}
                        className=" m-auto"
                    />
                </button>
            </div>
            <div className="xl:flex xl:items-center md:grid hidden grid-cols-4 lg:gap-1 gap-2 text-white font-semibold font-sanpro text-xs pb-6">
                <Link href="./" className="xl:mr-3 shrink-0 mx-auto">
                    <img src="/icons/phone.png" alt="phone icon" width={30} height={30} className='m-auto pb-2' />
                    ĐIỆN THOẠI
                </Link>
                <Link href="./" className="xl:mr-3 shrink-0 mx-auto">
                    <img src="/icons/tablet_laptop.png" alt="phone icon" width={30} height={30} className='m-auto pb-2' />
                    TABLET/LAPTOP
                </Link>
                <Link href="./" className="xl:mr-3 shrink-0 mx-auto">
                    <img src="/icons/accessory.png" alt="phone icon" width={30} height={30} className='m-auto pb-2' />
                    PHỤ KIỆN
                </Link>
                <Link href="./" className="xl:mr-3 shrink-0 mx-auto">
                    <img src="/icons/sim.png" alt="phone icon" width={30} height={30} className='m-auto pb-2' />
                    SIM SỐ
                </Link>
                <Link href="./" className="xl:mr-3 shrink-0 mx-auto">
                    <img src="/icons/sale.png" alt="phone icon" width={30} height={30} className='m-auto pb-2' />
                    KHUYẾN MÃI
                </Link>
                <Link href="./" className="xl:mr-3 shrink-0 mx-auto">
                    <img src="/icons/news.png" alt="phone icon" width={30} height={30} className='m-auto pb-2' />
                    TIN TỨC
                </Link>
                <Link href="./" className="xl:mr-3 shrink-0 mx-auto">
                    <img src="/icons/phone.png" alt="phone icon" width={30} height={30} className='m-auto pb-2' />
                    MÁY THANH LÝ
                </Link>
                <Link href="./" className="xl:mr-3 shrink-0 mx-auto">
                    <img src="/icons/cart.png" alt="phone icon" width={30} height={30} className='m-auto pb-2' />
                    GIỎ HÀNG
                </Link>
            </div>
            {/*mobile*/}
            <Link href="/" className=" absolute md:hidden bottom-[80px]">
                <img src="/img/logo.png" alt="mhm logo" width={180} />
            </Link>
            <div className="flex md:hidden pt-10 pb-2 px-4 w-full">
                <input type="text" placeholder='Tìm kiếm sản phẩm' className="inputBox h-[40px] rounded-l-lg pl-4" />
                <button className="w-[40px] h-[40px] bg-white rounded-r-lg">
                    <Image
                        src="/icons/search.svg"
                        alt='search icon'
                        width={20}
                        height={20}
                        className=" m-auto"
                    />
                </button>
            </div>
            <div className="md:hidden absolute top-4 right-4">
                <Image
                    src="/icons/menu.svg"
                    alt="menu icon"
                    width={20}
                    height={20}
                    onClick={() => setToggleDropdown((prev) => !prev)}
                />

                {toggleDropdown && (
                    <div className="absolute right-0 top-full mt-3 w-full p-5 rounded-lg min-w-[300px] flex flex-col gap-6 justify-start items-start bg-black/60 border-2 border-white">
                        <Link href="/" className="text-sm font-sanpro text-white hover:text-gray-500 font-bold flex items-center" 
                        // onClick={() => setToggleDropdown(false)}
                        >
                         ĐIỆN THOẠI
                        <Image
                        src="/icons/plus.svg"
                        alt="plus icon"
                        width={20}
                        height={20}
                        className=" ml-[146px]"
                        /> 
                        </Link>
                        <Link href="/" className="text-sm font-sanpro text-white hover:text-gray-500 font-bold flex items-center"
                        onClick={() => setToggleDropdown(false)}>
                         TABLET/LAPTOP
                         <Image
                        src="/icons/plus.svg"
                        alt="plus icon"
                        width={20}
                        height={20}
                        className=" ml-28"
                        />
                        </Link>
                        <Link href="/" className="text-sm font-sanpro text-white hover:text-gray-500 font-bold flex items-center" 
                        onClick={() => setToggleDropdown(false)}>
                         PHỤ KIỆN
                         <Image
                        src="/icons/plus.svg"
                        alt="plus icon"
                        width={20}
                        height={20}
                        className=" ml-40"
                        />
                        </Link>
                        <Link href="/" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                         SIM SỐ
                        </Link>
                        <Link href="/" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                         KHUYẾN MÃI
                        </Link>
                        <Link href="/" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                         TIN TỨC
                        </Link>
                        <Link href="/" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                         MÁY THANH LÝ
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default navBar