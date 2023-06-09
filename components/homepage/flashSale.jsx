"use client"

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from "swiper/element/bundle";
register();
import Image from 'next/image';
import '@styles/flashSale.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import data from '@utils/fakedata.json'

const flashSale = () => {
  const countDate = new Date(data.flashSaleTime).getTime();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  setInterval(() => {
    const now = new Date().getTime();
    const distance = countDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }, 1000);

  const [flashSaleData, setFlashSaleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/flashsale');
      const Data = await response.json();
      setFlashSaleData(Data);
    }
    fetchData();
  }, []);


  return (
    <div className='relative font-sanpro md:pt-2 flex flex-col md:w-[1200px] sm:w-[760px] w-[400px]'>
      {/* flashSale */}
      <div className='relative flex ml-4 items-center'>
        <img src="/icons/flashSale.gif" alt="flashSaleIcon" className='w-[30px] h-[30px]' />
        <span className='font-bold'>FLASH SALE</span>
        <div className='flashSaleTime ml-3'>
          <span className='flex gap-2'><h1>{days}</h1> ngày <h1>{hours}</h1> giờ <h1>{minutes}</h1> phút <h1>{seconds}</h1> giây</span>
        </div>
      </div>

      {/* phoneFlashSaleContainer 1920px*/}
      <div>
        {/* 1920px */}
        <div className='md:flex hidden justify-start'>
          <Swiper
            spaceBetween={1}
            slidesPerView={5}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {flashSaleData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className='productCard'>
                    <img src={item.image} alt="flashSaleProductImg" className='w-[200px] h-[200px] mt-3 transition duration-1000 hover:scale-[1.1]' />
                    <span className='productCardName'>{item.name}</span>
                    <div className='flex gap-3 items-end text-left w-full ml-8'>
                      <span className='text-red-800 text-xl font-bold'>{item.sale}</span>
                      <span className='line-through text-gray-400'>{item.price}</span>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
            <Image src="/icons/prev.svg" alt="prev-icon" width={25} height={20} className='swiper-button-prev' />
            <Image src="/icons/next.svg" alt="next-icon" width={25} height={20} className='swiper-button-next' />
          </Swiper>
        </div>

        {/*768px*/}
        <div className='sm:flex md:hidden hidden'>
          <Swiper
            spaceBetween={1}
            slidesPerView={3}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {flashSaleData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className='productCard'>
                    <img src={item.image} alt="flashSaleProductImg" className='w-[200px] h-[200px] mt-3 transition duration-1000 hover:scale-[1.1]' />
                    <span className='productCardName'>{item.name}</span>
                    <div className='flex gap-3 items-end text-left w-full ml-8'>
                      <span className='text-red-800 text-xl font-bold'>{item.sale}</span>
                      <span className='line-through text-gray-400'>{item.price}</span>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
            <Image src="/icons/prev.svg" alt="prev-icon" width={25} height={20} className='swiper-button-prev' />
            <Image src="/icons/next.svg" alt="next-icon" width={25} height={20} className='swiper-button-next' />
          </Swiper>
        </div>

        <div className='sm:hidden'>
          <Swiper
            spaceBetween={1}
            slidesPerView={2}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {flashSaleData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className='productCard'>
                    <img src={item.image} alt="flashSaleProductImg" className='sm:w-[200px] sm:h-[200px] w-[180px] h-[180px]  mt-3 transition duration-1000 sm:hover:scale-[1.1]' />
                    <span className='productCardName'>{item.name}</span>
                    <div className='flex flex-col text-left w-full ml-8'>
                      <span className='text-red-800 text-xl font-bold'>{item.sale}</span>
                      <span className='line-through text-gray-400'>{item.price}</span>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
            <Image src="/icons/prev.svg" alt="prev-icon" width={25} height={20} className='swiper-button-prev' />
            <Image src="/icons/next.svg" alt="next-icon" width={25} height={20} className='swiper-button-next' />
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default flashSale