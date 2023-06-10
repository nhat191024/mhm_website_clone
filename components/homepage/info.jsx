"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { useState, useEffect } from 'react';
import Image from 'next/image';
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

            {/* sale news */}
            <div className='newsCustom relative flex sm:justify-center justify-start md:items-center items-start gap-6 sm:mt-8 rounded-lg md:w-[1200px] md:h-[460px] sm:w-[720px] sm:h-[860px] w-[380px] h-[1280px] shadow-md px-4'>
                <div>
                    <div className='saleNewsCustom flex sm:justify-center sm:gap-6 gap-2 mt-10'>
                        <span className='absolute left-4 top-4 text-red-600 sm:text-sm text-base'>Tin Khuyến Mãi</span>
                        {/* news 1 */}
                        <div className='md:w-[370px] h-[400px] w-[320px] relative md:mt-0 mt-3'>
                            <img src="/img/salenews.png" alt="" className='md:w-[370px] md:h-[190px] w-[320px] h-[150px]' loading='lazy'/>
                            <div className='md:h-[210px] h-[250px] border-x-2 border-b-2'>
                                <div className='mx-4'>
                                    <span className='text-sm'>TƯNG BỪNG KHAI TRƯƠNG CƠ SỞ 15 CỦA MINH HOÀNG MOBILE !!!</span>
                                </div>
                                <div className='mt-4 mx-4'>
                                    <span className='font-bold text-base'>Nhân dịp khai trương cơ sở thứ 15 của hệ thống Minh Hoàng Mobile vào 3 ngày 9-11/6/2023, khi đến tham quan, trải nghiệm và mua sắm tại địa chỉ 601 Ngô Gia Tự - Hải An ...</span>
                                </div>
                                <div className='w-full h-[40px] absolute bottom-0 border-t-2 flex justify-start items-center pl-4 gap-2'>
                                    <Image src="/icons/date.svg" width={12} height={12} />
                                    <span className='font-bold text-xs'>08/06/23</span>
                                    <Image src="/icons/author.svg" width={12} height={12} />
                                    <span className='font-bold text-xs'>Minh hoàng Mobile</span>
                                    <Image src="/icons/cmt.svg" width={12} height={12} />
                                    <span className='font-bold text-xs'>0</span>
                                </div>
                            </div>
                        </div>

                        {/* news 2 */}
                        <div className='md:w-[370px] h-[400px] w-[320px] relative md:mt-0 mt-3'>
                            <img src="/img/salenews2.png" alt="" className='md:w-[370px] md:h-[190px] w-[320px] h-[150px]' loading='lazy'/>
                            <div className='md:h-[210px] h-[250px] border-x-2 border-b-2'>
                                <div className='mx-4'>
                                    <span className='text-sm'>SALE GIỮA NĂM - RẺ LÀ SẮM !!!</span>
                                </div>
                                <div className='mt-8 mx-4'>
                                    <span className='font-bold text-base'>Sale giữa năm – rẻ là sắm !!! Bạn đang tìm kiếm một địa chỉ chuyên phân phối và cung cấp những sản phẩm công nghệ với giá cả phải chăng mà vẫn đảm bảo về chất lượng? K...</span>
                                </div>
                                <div className='w-full h-[40px] absolute bottom-0 border-t-2 flex justify-start items-center pl-4 gap-2'>
                                    <Image src="/icons/date.svg" width={12} height={12} />
                                    <span className='font-bold text-xs'>08/06/23</span>
                                    <Image src="/icons/author.svg" width={12} height={12} />
                                    <span className='font-bold text-xs'>Minh hoàng Mobile</span>
                                    <Image src="/icons/cmt.svg" width={12} height={12} />
                                    <span className='font-bold text-xs'>0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* tech news */}
                <span className='techNewsTitleCustom absolute right-[320px] md:top-4 top-[470px] text-red-600 text-sm'>Tin Công Nghệ</span>
                <span className='md:hidden flex absolute left-4 sm:top-[470px] top-[880px] text-red-600 text-sm'>Tin Công Nghệ</span>
                <div className='md:w-[380px] h-[400px] sm:w-[680px] w-[370px] flex flex-col md:gap-6 gap-3 md:mt-10 mt-4'>
                    <div className='flex gap-2'>
                        <img src="/img/technews1.png" alt="" className='w-[120px] h-[60px]' loading='lazy'/>
                        <span className='font-bold md:text-sm sm:text-base text-sm'>Bay bước vào không gian độc đáo gõ văn bản với bàn phím ảo lơ lửng trên Kính Apple Vision Pro.</span>
                    </div>
                    <div className='flex gap-2'>
                        <img src="/img/technews2.png" alt="" className='w-[120px] h-[60px]' loading='lazy'/>
                        <span className='font-bold md:text-sm sm:text-base text-sm'>Bản cập nhật watchOS 10 sẽ mang đến những gì mới mẻ và thú vị cho người dùng Apple Watch ???</span>
                    </div>
                    <div className='flex gap-2'>
                        <img src="/img/technews3.png" alt="" className='w-[120px] h-[60px]' loading='lazy'/>
                        <span className='font-bold md:text-sm sm:text-base text-sm'>Đã đến lúc Apple ra mắt 1 mẫu iPhone cao cấp hơn Pro Max, bạn có mong đợi hay không ???</span>
                    </div>
                    <div className='flex gap-2'>
                        <img src="/img/technews4.png" alt="" className='w-[120px] h-[60px]' loading='lazy'/>
                        <span className='font-bold md:text-sm sm:text-base text-sm'>Apple ra mắt Vision Pro – kính thực tế ảo đầu tiên của hãng tại sự kiện WWDC 2023</span>
                    </div>
                    <div className='flex gap-2'>
                        <img src="/img/technews5.png" alt="" className='w-[120px] h-[60px]' loading='lazy'/>
                        <span className='font-bold md:text-sm sm:text-base text-sm'>4 tính năng của Android được iOS 17 áp dụng theo</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default info