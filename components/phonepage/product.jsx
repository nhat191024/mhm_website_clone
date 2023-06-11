'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import '@styles/product.css'

const product = () => {

    const [PhoneData, setPhoneData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/phone');
            const Data = await response.json();
            setPhoneData(Data);
        }
        fetchData();
    }, []);

    return (
        <div className='font-sanpro'>
            <span className='text-sm'><Link href='/' className='text-red-600 md:ml-0 ml-6'>Trang chủ</Link>  / Điện thoại nổi bật nhất</span>
            <div className='flex mt-2 gap-4'>

                {/* fillter */}
                <div className='md:flex hidden flex-col w-[230px]'>

                    {/* 1  */}
                    <div className='h-[45px] bg-gray-100 flex items-center px-4 border-b-2'>
                        <div className='flex justify-start w-full'>
                            <span className=' font-bold text-base text-red-600'>KHOẢNG GIÁ</span>
                        </div>
                        <div className='flex justify-end w-full'>
                            <span className=' font-bold text-base text-red-600'>+</span>
                        </div>
                    </div>


                    {/* 2 */}
                    <div className='h-[45px] bg-gray-100 flex items-center px-4 border-b-2'>
                        <div className='flex justify-start w-full'>
                            <span className=' font-bold text-base text-red-600'>THƯƠNG HIỆU</span>
                        </div>
                        <div className='flex justify-end w-full'>
                            <span className=' font-bold text-base text-red-600'>+</span>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className='h-[45px] bg-gray-100 flex items-center px-4 border-b-2'>
                        <div className='flex justify-start w-full'>
                            <span className=' font-bold text-base text-red-600'>LOẠI SẢN PHẨM</span>
                        </div>
                        <div className='flex justify-end w-4'>
                            <span className=' font-bold text-base text-red-600'>+</span>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className='h-[45px] bg-gray-100 flex items-center px-4 border-b-2'>
                        <div className='flex justify-start w-full'>
                            <span className=' font-bold text-base text-red-600'>RAM</span>
                        </div>
                        <div className='flex justify-end w-full'>
                            <span className=' font-bold text-base text-red-600'>+</span>
                        </div>
                    </div>

                    {/* 5 */}
                    <div className='h-[45px] bg-gray-100 flex items-center px-4 border-b-2'>
                        <div className='flex justify-start w-full'>
                            <span className=' font-bold text-base text-red-600'>DUNG LƯỢNG (ROM)</span>
                        </div>
                        <div className='flex justify-end w-full w-4'>
                            <span className=' font-bold text-base text-red-600'>+</span>
                        </div>
                    </div>

                    {/* 6 */}
                    <div className='h-[45px] bg-gray-100 flex items-center px-4 border-b-2'>
                        <div className='flex justify-start w-full'>
                            <span className=' font-bold text-base text-red-600'>BỘ VI XỬ LÝ</span>
                        </div>
                        <div className='flex justify-end w-full'>
                            <span className=' font-bold text-base text-red-600'>+</span>
                        </div>
                    </div>

                    {/* 7 */}
                    <div className='h-[45px] bg-gray-100 flex items-center px-4 border-b-2'>
                        <div className='flex justify-start w-full'>
                            <span className=' font-bold text-base text-red-600'>MÀU SẮC</span>
                        </div>
                        <div className='flex justify-end w-full'>
                            <span className=' font-bold text-base text-red-600'>+</span>
                        </div>
                    </div>

                </div>

                {/* product & arrange */}
                <div className='flex flex-col'>
                    {/* arrange */}
                    <div className='md:w-[960px] sm:h-[60px] sm:w-[768px] w-[410px] h-[140px] bg-gray-50 flex sm:flex-row flex-col items-center justify-center px-12 sm:gap-0 gap-5'>
                        <div className='font-bold flex sm:items-start items-center justify-center sm:justify-start w-full'>
                            <span className='text-xl'>ĐIỆN THOẠI NỔI BẬT NHẤT</span>
                        </div>

                        {/* arrange */}
                        <div className='flex w-[500px] sm:justify-end justify-center gap-2 items-center'>
                            <span>Sắp Xếp</span>
                            <div className='w-[200px] h-[40px] flex items-center'>
                                <select className='w-full h-full bg-gray-50 border pl-4 rounded'>
                                    <option value="0">Tùy Chọn</option>
                                    <option value="1">Sản Phẩm Bán Chạy</option>
                                    <option value="2">Theo Bảng Chữ Cái A-Z</option>
                                    <option value="3">Theo Bảng Chữ Cái Z-A</option>
                                    <option value="4">Giá Từ Thấp Tới Cao</option>
                                    <option value="5">Giá Từ Cao Tới Thấp</option>
                                    <option value="6">Mới Nhất</option>
                                    <option value="7">Cũ Nhất</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* product */}
                    <div>
                        <div className='grid sm:grid-cols-4 grid-cols-2 mt-4 md:px-0 px-4'>
                            {PhoneData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className='productCard'>
                                            <img src={item.image} alt="phone img" loading='lazy' className='md:w-[200px] md:h-[200px] w-[160px] h-[160px] mt-3 transition duration-1000 hover:scale-[1.1]' />
                                            <div className='saleCard'>
                                                <img src="/icons/saleIcon.png" alt="saleIcon" className=' w-6 h-6' />
                                                <span className='text-xs font-bold text-white'>CHÍNH HÃNG FULL BOX</span>
                                            </div>
                                            <span className='productCardName'>{item.name}</span>
                                            <div className='flex h-full md:flex-row flex-col md:gap-3 md:justify-start justify-end md:items-end md:mb-2 text-left w-full ml-8'>
                                                <span className='text-red-800 text-xl font-bold'>{item.sale}</span>
                                                <span className='line-through text-gray-400'>{item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default product