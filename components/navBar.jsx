'use client'

import '@styles/globals.css';
import '@styles/navBar.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';



const navBar = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [showPhoneTable, setPhoneShowTable] = useState(false);
    const [showLaptopTable, setLaptopShowTable] = useState(false);
    const [showAccessoryTable, setAccessoryShowTable] = useState(false);

    const [hovered, setHovered] = useState(false);

    const handlePhoneMouseEnter = () => {
        setPhoneShowTable(true);
    }
    const handlePhoneMouseLeave = () => {
        if (!hovered) {
            setPhoneShowTable(false);
        }
    }
    const handlePhoneTableMouseEnter = () => {
        setHovered(true);
    };
    const handlePhoneTableMouseLeave = () => {
        setHovered(false);
        setPhoneShowTable(false);
    };

    const handleLaptopMouseEnter = () => {
        setLaptopShowTable(true);
    }
    const handleLaptopMouseLeave = () => {
        if (!hovered) {
            setLaptopShowTable(false);
        }
    }
    const handleLaptopTableMouseEnter = () => {
        setHovered(true);
    };
    const handleLaptopTableMouseLeave = () => {
        setHovered(false);
        setLaptopShowTable(false);
    };

    const handleAccessoryMouseEnter = () => {
        setAccessoryShowTable(true);
    }
    const handleAccessoryMouseLeave = () => {
        if (!hovered) {
            setAccessoryShowTable(false);
        }
    }
    const handleAccessoryTableMouseEnter = () => {
        setHovered(true);
    };
    const handleAccessoryTableMouseLeave = () => {
        setHovered(false);
        setAccessoryShowTable(false);
    };

    return (
        <nav className=" relative flex md:h-[90px] h-[140px] items-center justify-center gap-4 pt-3 w-full bg-primary-color mb-3">
            {/*desktop*/}
            <Link href="/" className="md:flex pb-6 mr-20 hidden">
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
                <Link href="./" className="xl:mr-3 shrink-0 mx-auto group" onMouseEnter={handlePhoneMouseEnter} onMouseLeave={handlePhoneMouseLeave}>
                    <img src="/icons/phone.png" alt="phone icon" width={30} height={30} className='navIcon' />
                    ĐIỆN THOẠI
                </Link>
                <Link href="./" className="xl:mr-3 shrink-0 mx-auto group" onMouseEnter={handleLaptopMouseEnter} onMouseLeave={handleLaptopMouseLeave}>
                    <img src="/icons/tablet_laptop.png" alt="phone icon" width={30} height={30} className='navIcon' />
                    TABLET/LAPTOP
                </Link>
                <Link href="./" className="xl:mr-3 shrink-0 mx-auto group" onMouseEnter={handleAccessoryMouseEnter} onMouseLeave={handleAccessoryMouseLeave}>
                    <img src="/icons/accessory.png" alt="phone icon" width={30} height={30} className='navIcon' />
                    PHỤ KIỆN
                </Link>
                <Link href="./" className="xl:mr-3 shrink-0 mx-auto group">
                    <img src="/icons/sim.png" alt="phone icon" width={30} height={30} className='navIcon' />
                    SIM SỐ
                </Link>
                <Link href="./" className="xl:mr-3 shrink-0 mx-auto group">
                    <img src="/icons/sale.png" alt="phone icon" width={30} height={30} className='navIcon' />
                    KHUYẾN MÃI
                </Link>
                <Link href="./" className="xl:mr-3 shrink-0 mx-auto group">
                    <img src="/icons/news.png" alt="phone icon" width={30} height={30} className='navIcon' />
                    TIN TỨC
                </Link>
                <Link href="./" className="xl:mr-3 shrink-0 mx-auto group">
                    <img src="/icons/phone.png" alt="phone icon" width={30} height={30} className='navIcon' />
                    MÁY THANH LÝ
                </Link>
                <Link href="./" className="xl:mr-3 shrink-0 mx-auto group">
                    <img src="/icons/cart.png" alt="phone icon" width={30} height={30} className='navIcon' />
                    GIỎ HÀNG
                </Link>
            </div>

            {/* phoneHoverTable */}
            {showPhoneTable && (
                <div className='absolute flex gap-10 w-[800px] h-[420px] left-[800px] top-[65px] z-10 shadow-lg bg-white rounded-lg font-sanpro text-sm p-4 justify-center' onMouseEnter={handlePhoneTableMouseEnter} onMouseLeave={handlePhoneTableMouseLeave}>
                    <div className='tableCol'>
                        <Link href="/" className='tableTitle'>IPHONE</Link>
                        <Link href="/" className='hover:text-red-600'>IPHONE 14 | PLUS | PRO | PRO MAX</Link>
                        <Link href="/" className='hover:text-red-600'>IPHONE 13 | MINI | PRO | PRo MAX</Link>
                        <Link href="/" className='hover:text-red-600'>IPHONE 12 | MAX | PRO | PRO MAX</Link>
                        <Link href="/" className='hover:text-red-600'>IPHONE 11 | PRO | PRO MAX</Link>
                        <Link href="/" className='hover:text-red-600'>IPHONE X | XS | XR | XS MAX</Link>
                        <Link href="/" className='hover:text-red-600'>IPHONE 8 | 8 PLUS</Link>
                        <Link href="/" className='hover:text-red-600'>IPHONE VN/A</Link>
                    </div>
                    <div className='tableCol text-center'>
                        <Link href="/" className='tableTitle'>SAMSUNG</Link>
                        <Link href="/" className='hover:text-red-600'>GALAXY S</Link>
                        <Link href="/" className='hover:text-red-600'>GALAXY M</Link>
                        <Link href="/" className='hover:text-red-600'>GALAXY A</Link>
                        <Link href="/" className='pb-4 hover:text-red-600'>GALAXY NOTE</Link>
                        <Link href="/" className='font-semibold border-b pb-2 text-center hover:text-red-600'>MÁY TÍNH BẢNG</Link>
                        <Link href="/" className='hover:text-red-600'>IPAD GEN 10</Link>
                        <Link href="/" className='hover:text-red-600'>IPAD GEN 11" M1</Link>
                        <Link href="/" className='hover:text-red-600'>IPAD PRO M2</Link>
                        <Link href="/" className='hover:text-red-600'>SAMSUNG GALAXY TAB S8</Link>
                    </div>
                    <div className='tableCol text-center'>
                        <Link href="/" className='tableTitle'>OPPO</Link>
                        <Link href="/" className='hover:text-red-600'>OPPO RENO 8 PRO (5G)</Link>
                        <Link href="/" className='hover:text-red-600'>OPPO RENO 8Z (5G)</Link>
                        <Link href="/" className='hover:text-red-600'>OPPO RENO 8 (4G)</Link>
                        <Link href="/" className='hover:text-red-600'>OPPO A77S</Link>
                        <Link href="/" className='hover:text-red-600'>OPPO A57</Link>
                        <Link href="/" className='hover:text-red-600'>OPPO A17</Link>
                    </div>
                    <div className='tableCol text-right'>
                        <Link href="/" className='tableTitle'>XIAOMI</Link>
                        <Link href="/" className='hover:text-red-600'>XIAOMI MI</Link>
                        <Link href="/" className='hover:text-red-600'>XIAOMI REDMI</Link>
                        <Link href="/" className='pb-6 hover:text-red-600'>XIAOMI POCO</Link>
                        <Link href="/" className=' apply font-semibold border-b pb-2 text-center hover:text-red-600'>MACBOOK</Link>
                        <Link href="/" className='hover:text-red-600'>MACBOOK AIR 2020 M1</Link>
                        <Link href="/" className='hover:text-red-600'>MACBOOK PRO M1</Link>
                    </div>
                </div>
            )}

            {/* LaptopHoverTable */}
            {showLaptopTable && (
                <div className='absolute grid grid-cols-4 gap-4 w-[800px] h-[120px] left-[800px] top-[65px] z-10 shadow-lg bg-white rounded-lg font-sanpro text-sm p-4 text-center' onMouseEnter={handleLaptopTableMouseEnter} onMouseLeave={handleLaptopTableMouseLeave}>
                    <Link href="/" className='tableTitle2'>IPAD</Link>
                    <Link href="/" className='tableTitle2'>MÁY TÍNH BẢNG SAMSUNG</Link>
                    <Link href="/" className='tableTitle2'>MACBOOK</Link>
                    <Link href="/" className='tableTitle2'>LAPTOP</Link>
                    <Link href="/" className='tableTitle2'>MICROSOFT SURFACE</Link>
                    <Link href="/" className='tableTitle2'>XIAOMI MIPAD</Link>
                </div>
            )}

            {/* AccessoryHoverTable */}
            {showAccessoryTable && (
                <div className='absolute flex flex-col gap-4 w-[200px] h-[390px] left-[1100px] top-[65px] z-10 shadow-lg bg-white rounded-lg font-sanpro text-sm p-4 text-center' onMouseEnter={handleAccessoryTableMouseEnter} onMouseLeave={handleAccessoryTableMouseLeave}>
                    <Link href="/" className='border-b pb-2 hover:text-red-600'>TAI NGHE APPLE AIRPODS</Link>
                    <Link href="/" className='border-b pb-2 hover:text-red-600'>TAI NGHE CHÍNH HÃNG</Link>
                    <Link href="/" className='border-b pb-2 hover:text-red-600'>ĐỒNG HỒ THÔNG MINH GARMIN</Link>
                    <Link href="/" className='border-b pb-2 hover:text-red-600'>LOA BLUETOOTH</Link>
                    <Link href="/" className='border-b pb-2 hover:text-red-600'>PIN SẠC DỰ PHÒNG</Link>
                    <Link href="/" className='border-b pb-2 hover:text-red-600'>THIẾT BỊ ĐEO THÔNG MINH</Link>
                    <Link href="/" className='border-b pb-2 hover:text-red-600'>ĐỒ CHƠI CÔNG NGHỆ</Link>
                    <Link href="/" className='border-b pb-2 hover:text-red-600'>CỦ/CÁP SẠC CHÍNH HÃNG</Link>
                </div>
            )}

            {/* ==================================================================================================================================== */}
            {/*mobile*/}
            <Link href="/" className=" absolute md:hidden pb-16 sm:mr-[530px]">
                <img src="/img/logo.png" alt="mhm logo" width={200} />
            </Link>
            <div className="flex md:hidden pt-16 pb-2 px-4 w-full">
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
            <div className="md:hidden absolute top-4 right-6">
                <Image
                    src="/icons/menu.svg"
                    alt="menu icon"
                    width={25}
                    height={25}
                    onClick={() => setToggleDropdown((prev) => !prev)}
                />

                {toggleDropdown && (
                    <div className="absolute right-0 top-full mt-3 w-full p-5 rounded-lg min-w-[300px] flex flex-col gap-6 justify-start items-start bg-black/60 border-2 border-white z-10">
                        <Link href="/" className="text-sm font-sanpro text-white hover:text-gray-500 font-bold flex items-center"
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
                                className=" ml-[120px]"
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