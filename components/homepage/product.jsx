'use client'

import { useEffect, useState } from 'react';
import '@styles/product.css'

const phone = () => {
  const [PhoneData, setPhoneData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/phone');
      const Data = await response.json();
      setPhoneData(Data);
    }
    fetchData();
  }, []);

  const [tabletData, settabletData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/tablet');
      const Data = await response.json();
      settabletData(Data);
    }
    fetchData();
  }, []);

  const [laptopData, setlaptopData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/laptop');
      const Data = await response.json();
      setlaptopData(Data);
    }
    fetchData();
  }, []);

  const [watchData, setwatchData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/watch');
      const Data = await response.json();
      setwatchData(Data);
    }
    fetchData();
  }, []);

  const [speakerData, setspeakerData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/speaker');
      const Data = await response.json();
      setspeakerData(Data);
    }
    fetchData();
  }, []);

  const [chargerData, setchargerData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/charger');
      const Data = await response.json();
      setchargerData(Data);
    }
    fetchData();
  }, []);

  return (
    <div className='font-sanpro md:w-[1220px] sm:w-[740px] w-[400px] mt-10'>
      {/* phone */}
      <div>
        <span className='sm:text-lg text-base font-bold text-left ml-2'>Hàng Công Ty - Ưu Đãi Ngập Tràn - Bảo Hành Toàn Quốc</span>
        <div className='grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2'>
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

      {/* tablet */}
      <div className='mt-10'>
        <span className='sm:text-lg text-base font-bold text-left ml-2'>MÁY TÍNH BẢNG IPAD - ANDROID</span>
        <div className='grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2'>
          {tabletData.map((item, index) => {
            return (
              <div key={index}>
                <div className='productCard'>
                  <img src={item.image} alt="phone img" loading='lazy' className='md:w-[200px] md:h-[200px] w-[160px] h-[160px] mt-3 transition duration-1000 hover:scale-[1.1]' />
                  <div className='saleCard'>
                    <img src="/icons/saleIcon.png" alt="saleIcon" className=' w-6 h-6' />
                    <span className='text-xs font-bold text-white'>CHÍNH HÃNG FULL BOX</span>
                  </div>
                  <span className='productCardName'>{item.name}</span>
                  <div className='flex h-full md:flex-row flex-col md:gap-3 items-start md:justify-start justify-end md:items-end md:mb-2 text-left w-full ml-8'>
                    <span className='text-red-800 text-xl font-bold'>{item.sale}</span>
                    <span className='line-through text-gray-400'>{item.price}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* laptop */}
      <div className='mt-10'>
        <span className='sm:text-lg text-base font-bold text-left ml-2'>LAPTOP CAO CẤP - BẢO HÀNH 12 THÁNG</span>
        <div className='grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2'>
          {laptopData.map((item, index) => {
            return (
              <div key={index}>
                <div className='productCard'>
                  <img src={item.image} alt="phone img" loading='lazy' className='md:w-[200px] md:h-[200px] w-[160px] h-[160px] mt-3 transition duration-1000 hover:scale-[1.1]' />
                  <div className='saleCard'>
                    <img src="/icons/saleIcon.png" alt="saleIcon" className=' w-6 h-6' />
                    <span className='text-xs font-bold text-white'>CHÍNH HÃNG FULL BOX</span>
                  </div>
                  <span className='productCardName'>{item.name}</span>
                  <div className='flex h-full md:flex-row flex-col md:gap-3 items-start md:justify-start justify-end md:items-end md:mb-2 text-left w-full ml-8'>
                    <span className='text-red-800 text-xl font-bold'>{item.sale}</span>
                    <span className='line-through text-gray-400'>{item.price}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* SMARTWATCH */}
      <div className='mt-10'>
        <span className='sm:text-lg text-base font-bold text-left ml-2'>ĐỒNG HỒ THÔNG MINH - SMARTWATCH</span>
        <div className='grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2'>
          {watchData.map((item, index) => {
            return (
              <div key={index}>
                <div className='productCard'>
                  <img src={item.image} alt="phone img" loading='lazy' className='md:w-[200px] md:h-[200px] w-[160px] h-[160px] mt-3 transition duration-1000 hover:scale-[1.1]' />
                  <div className='saleCard'>
                    <img src="/icons/saleIcon.png" alt="saleIcon" className=' w-6 h-6' />
                    <span className='text-xs font-bold text-white'>CHÍNH HÃNG FULL BOX</span>
                  </div>
                  <span className='productCardName'>{item.name}</span>
                  <div className='flex h-full md:flex-row flex-col md:gap-3 items-start md:justify-start justify-end md:items-end md:mb-2 text-left w-full ml-8'>
                    <span className='text-red-800 text-xl font-bold'>{item.sale}</span>
                    <span className='line-through text-gray-400'>{item.price}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* speaker */}
      <div className='mt-10'>
        <span className='sm:text-lg text-base font-bold text-left ml-2'>ĐỒ CHƠI ÂM THANH - GIÁ SIÊU RẺ</span>
        <div className='grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2'>
          {speakerData.map((item, index) => {
            return (
              <div key={index}>
                <div className='productCard'>
                  <img src={item.image} alt="phone img" loading='lazy' className='md:w-[200px] md:h-[200px] w-[160px] h-[160px] mt-3 transition duration-1000 hover:scale-[1.1]' />
                  <div className='saleCard'>
                    <img src="/icons/saleIcon.png" alt="saleIcon" className=' w-6 h-6' />
                    <span className='text-xs font-bold text-white'>CHÍNH HÃNG FULL BOX</span>
                  </div>
                  <span className='productCardName'>{item.name}</span>
                  <div className='flex h-full md:flex-row flex-col md:gap-3 items-start md:justify-start justify-end md:items-end md:mb-2 text-left w-full ml-8'>
                    <span className='text-red-800 text-xl font-bold'>{item.sale}</span>
                    <span className='line-through text-gray-400'>{item.price}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* charger */}
      <div className='mt-10'>
        <span className='sm:text-lg text-base font-bold text-left ml-2'>CỦ SẠC CHÍNH HÃNG</span>
        <div className='grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2'>
          {chargerData.map((item, index) => {
            return (
              <div key={index}>
                <div className='productCard'>
                  <img src={item.image} alt="phone img" loading='lazy' className='md:w-[200px] md:h-[200px] w-[160px] h-[160px] mt-3 transition duration-1000 hover:scale-[1.1]' />
                  <div className='saleCard'>
                    <img src="/icons/saleIcon.png" alt="saleIcon" className=' w-6 h-6' />
                    <span className='text-xs font-bold text-white'>CHÍNH HÃNG FULL BOX</span>
                  </div>
                  <span className='productCardName'>{item.name}</span>
                  <div className='flex h-full md:flex-row flex-col md:gap-3 items-start md:justify-start justify-end md:items-end md:mb-2 text-left w-full ml-8'>
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
  )
}

export default phone 