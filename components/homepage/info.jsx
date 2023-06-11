"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@styles/info.css'

const info = () => {
    const [shoplocationData, setshoplocationData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/shoplocation');
            const Data = await response.json();
            setshoplocationData(Data);
        }
        fetchData();
    }, []);
    return (
        <div className='mt-8 font-sanpro'>

            {/* shop location */}
            {/* 1920 */}
            <div className='h-[210px] w-[1200px] shoplocation'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={1}
                    slidesPerView={4}
                    autoplay={{ delay: 2000 }}
                    loop={true}
                >
                    {shoplocationData.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='relative w-[290px] h-[210px] '>
                                    <img src={item.image} alt="" className='w-[290px] h-[210px] rounded-lg' loading='lazy'/>
                                    <div className='flex items-center justify-center absolute w-[290px] h-[40px] bg-black bg-opacity-40 bottom-0 rounded-b-lg'>
                                        <span className='text-white font-light'>{item.name}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            {/* 768 */}
            <div className='sm:h-[210px] sm:w-[700px] h-[160px] w-[400px] md:hidden'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={1}
                    slidesPerView={2}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                >
                    {shoplocationData.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='relative sm:w-[340px] sm:h-[260px] w-[190px] h-[160px] sm:mx-0 mx-auto'>
                                    <img src={item.image} alt="" className='sm:w-[340px] sm:h-[260px] w-[190px] h-[160px] rounded-lg' loading='lazy'/>
                                    <div className='flex items-center justify-center text-center absolute sm:w-[340px] sm:h-[40px] w-[190px] h-[60px] bg-black bg-opacity-40 bottom-0 rounded-b-lg'>
                                        <span className='text-white font-light text-lg sm:text-base'>{item.name}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            {/* =============================================== */}
            {/* newspaper */}
            <div className='flex items-center justify-center flex-col sm:mt-20 mt-10'>
                <div>
                    <span className='md:text-lg sm:text-3xl text-lg font-bold'>Báo Chí Viết Về Minh Hoàng Mobile</span>
                </div>
                <div className='md:flex hidden justify-center gap-4 mt-4'>
                    <img src="/img/vtv.png" alt="vtv" className='w-[170px] h-[70px]' loading='lazy'/>
                    <img src="/img/vnnet.png" alt="vnnet" className='w-[170px] h-[70px]' loading='lazy'/>
                    <img src="/img/dantri.png" alt="dantri" className='w-[170px] h-[70px]' loading='lazy'/>
                    <img src="/img/vtcnew.png" alt="vtcnew" className='w-[170px] h-[70px]' loading='lazy'/>
                    <img src="/img/genk.png" alt="genk" className='w-[170px] h-[70px]' loading='lazy'/>
                </div>

                {/* 768px vs 640px */}
                <div className='md:hidden w-[400px] h-[100px] mt-6 flex flex-col gap-2'>
                    <div>
                        <Swiper modules={[Pagination]} spaceBetween={1} slidesPerView={3} pagination={{ el: '.slider-pagination' }}>
                            <SwiperSlide>
                                <img src="/img/vtv.png" alt="vtv" className='w-[120px] h-[60px]' loading='lazy'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/img/vnnet.png" alt="vnnet" className='w-[120px] h-[60px]' loading='lazy'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/img/dantri.png" alt="dantri" className='w-[120px] h-[60px]' loading='lazy'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/img/vtcnew.png" alt="vtcnew" className='w-[120px] h-[60px]' loading='lazy'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/img/genk.png" alt="genk" className='w-[120px] h-[60px]' loading='lazy'/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="slider-pagination flex justify-center" />
                </div>
            </div>     
        </div>
    )
}

export default info