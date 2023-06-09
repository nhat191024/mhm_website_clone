"use client"

import '@styles/globals.css';
import '@styles/slideShow.css';
import { useState, useEffect } from "react"
import Image from 'next/image';

const images = [
  {
    src: "/img/saleBanner.png",
    name: "Sale Giữa Năm - Rẻ Là Sắm",
  },
  {
    src: "/img/oppoBanner.png",
    name: "OPPO Renno 8T Series ưu đãi đến 1,2 triệu",
  },
  {
    src: "/img/samsungBanner.png",
    name: "Galaxy S23 Series ưu đãi đến 7 triệu",
  },
  {
    src: "/img/miBanner.png",
    name: "Xiaomi Siêu ưu đãi đến 2 triệu",
  },
  {
    src: "/img/saleBanner2.png",
    name: "Tiếp sức mùa thi - Ưu đãi đến 4 triệu",
  }

];

const slideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);

  // prev/next button
  const previousSlide = () => {
    clearTimeout(timeoutId);
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    clearTimeout(timeoutId);
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  // auto slide change
  const startInterval = () => {
    const id = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 3000);
    setTimeoutId(id);
  };

  useEffect(() => {
    startInterval();
    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentSlide]);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='flex md:flex-row flex-col justify-center gap-1'>
      {/*slider*/}
      <div>
        <div className="slideshow relative flex xl:w-[800px] xl:h-[300px] sm:w-[740px] sm:h-[380px] w-[380px] h-[200px]">
          <Image src="/icons/prev.svg" alt="prev-icon" width={25} height={20} className=" absolute sm:mt-32 mt-20" onClick={previousSlide} />
          <img className="slide w-full rounded-lg" src={images[currentSlide].src} alt={`Slide ${currentSlide + 1}`} />
          <Image src="/icons/next.svg" alt="next-icon" width={25} height={20} className=" absolute right-0 sm:mt-32 mt-20" onClick={nextSlide} />
        </div>

        <div className={`flex xl:w-[800px] sm:w-[740px] w-[380px] h-[60px] justify-center items-center relative`}>
          {images.map((each, index) => {
            const isActive = currentSlide === index;
            const showName = windowWidth > 640 || isActive;
            return showName ? (
              <div
                key={index}
                className={`image-name-item ${isActive ? 'active' : ''}  text-center py-1 px-2 font-sanpro xl:text-[13px] border-r rounded-lg bg-slate-50`}
                onClick={() => setCurrentSlide(index)}
                style={{ fontWeight: isActive ? 'bold' : 'normal' }}
              >
                {each.name}
              </div>
            ) : null;
          })}
        </div>
      </div>

      {/*Event & news & Sale*/}
      <div className='relative md:flex hidden flex-col items-stretch ml-2'>
        {/* Event */}
        <div className='flex self-stretch'>
          <div className='w-[88px] h-[34px] bg-primary-color flex items-center pl-2 mb-1 gap-[12px]'>
            <h1 className=' text-white font-sanpro font-bold '>Event</h1>
            <div className='triangle ml-1'></div>
          </div>
          <div className='w-[255px] h-[34px] border-b marquee overflow-hidden flex items-center'>
            <span className='inline-block animate-marquee font-bold font-sanpro italic'>Iphone 14 pro max đã sẵn hàng</span>
          </div>
        </div>
        {/* News */}
        <div className='flex self-stretch w-[390px] h-[65px]'>
          <img src="/img/news.png" alt="news" className='h-[65px] w-[124px]' />
          <div className='flex justify-center ml-2 flex-col'>
            <span className=' font-sanpro font-light text-sm'>3 nguyên mẫu sản phẩm chưa từng được ra mắt đã bị "khai tử" của Apple!!!</span>
            {/* information */}
            <div className='flex justify-start gap-2'>
              {/* date */}
              <div className='flex justify-center'>
                <Image
                  src="/icons/date.svg"
                  alt='date icons'
                  width={10}
                  height={10}
                />
                <span className='font-sanpro font-light pl-1'>25/5/23</span>
              </div>
              {/* author */}
              <div className='flex justify-center'>
                <Image
                  src="/icons/author.svg"
                  alt='author icons'
                  width={10}
                  height={10}
                />
                <span className='font-sanpro font-light pl-1'>Minh Hoàng Mobile</span>
              </div>
              {/* comment */}
              <div className='flex justify-center'>
                <Image
                  src="/icons/cmt.svg"
                  alt='comment icons'
                  width={10}
                  height={10}
                />
                <span className='font-sanpro font-light pl-1'>0</span>
              </div>
            </div>
          </div>
        </div>
        {/* sale */}
        <div className='w-[400px] h-[80px] flex flex-col gap-1'>
          <img src="/img/smallbanner1.png" alt="sale banner" />
          <img src="/img/smallbanner2.png" alt="sale banner" />
          <img src="/img/smallbanner3.png" alt="sale banner" />
        </div>
      </div>

      {/* ==================================================================================================================================== */}

      {/*Event & news & Sale - 768px*/}
      <div className='md:hidden sm:flex '>

        {/* event & news */}
        <div className='sm:w-[370px] sm:h-[300px]'>
          {/* event */}
          <div className='flex top-0'>
            <div className='sm:w-[100px] sm:h-[40px] w-[80px] h-[30px] bg-primary-color flex items-center pl-2 mb-1 gap-[12px]'>
              <h1 className='text-white font-sanpro font-bold sm:text-lg text-xs'>Event</h1>
              <div className='triangle2 sm:ml-0 mr-2'></div>
            </div>
            <div className='sm:w-[270px] sm:h-[40px] w-[300px] h-[30px] border-b marqueeMD overflow-hidden flex items-center bg-white'>
              <span className='inline-block animate-marqueeMD sm:font-bold font-normal font-sanpro italic sm:text-lg text-xs'>Iphone 14 pro max đã sẵn hàng</span>
            </div>
          </div>

          {/* news */}
          <div className='flex sm:flex-col sm:w-[370px] sm:h-[250px] w-[390px] h-[80px] pt-1'>
            <img src="/img/news.png" alt="news" className='sm:h-[160px] sm:w-[370px] w-[200px] h-[80px] pr-1' />
            <div className='flex justify-center sm:ml-2 ml-0 flex-col'>
              <div>
                <span className=' font-sanpro font-medium sm:text-xl text-[15px] sm:pt-2 pt-0'>3 nguyên mẫu sản phẩm chưa từng được ra mắt đã bị "khai tử" của Apple!!!</span>
              </div>
              {/* information */}
              <div className='flex justify-start items-end gap-2 pt-0'>
                {/* date */}
                <div className='flex justify-center'>
                  <Image
                    src="/icons/date.svg"
                    alt='date icons'
                    width={12}
                    height={12}
                  />
                  <span className='font-sanpro font-light sm:text-xl text-xs pl-1'>25/5/23</span>
                </div>
                {/* author */}
                <div className='flex justify-center'>
                  <Image
                    src="/icons/author.svg"
                    alt='author icons'
                    width={12}
                    height={12}
                  />
                  <span className='font-sanpro font-light sm:text-xl text-xs pl-1'>Minh Hoàng Mobile</span>
                </div>
                {/* comment */}
                <div className='flex justify-center'>
                  <Image
                    src="/icons/cmt.svg"
                    alt='comment icons'
                    width={18}
                    height={18}
                  />
                  <span className='font-sanpro font-light sm:text-xl text-xs pl-1'>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* sale */}
        <div className='sm:w-[370px] sm:h-[290px] w-[380px] h-[360px]flex flex-col gap-1 sm:mt-0 mt-2'>
          <img src="/img/smallbanner1.png" alt="sale banner" className='saleBannerSm' />
          <img src="/img/smallbanner2.png" alt="sale banner" className='saleBannerSm' />
          <img src="/img/smallbanner3.png" alt="sale banner" className='saleBannerSm' />
        </div>
      </div>
    </div>
  );
}
export default slideShow

