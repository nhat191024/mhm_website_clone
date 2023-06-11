'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import '@styles/newspage.css'

const Salepage = () => {

    const [techData, settechData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/tech');
            const Data = await response.json();
            settechData(Data);
        }
        fetchData();
    }, []);

    return (
        <div className="font-sanpro mb-2">
            <div className="md:w-[1200px] sm:w-[765px] w-[410px] md:px-0 px-6">
                <div className="flex flex-col gap-2 w-full justify-start mb-4">
                    <span className='text-sm'><Link href='/' className='text-red-600 md:ml-0 ml-6'>Trang chủ</Link>  / Tin Tức mhm</span>
                    <span className="font-bold text-3xl md:ml-0 ml-4">TIN TỨC MHM</span>
                </div>
                <div className='sm:grid md:grid-cols-3 sm:grid-cols-2 flex flex-col md:gap-5 gap-2'>
                    {techData.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className='newsCard'>
                                    <img src={item.image} className='newsCardImage' />
                                    <div className='px-4 pt-2'>
                                        <span className='text-sm font-bold'>{item.title}</span>
                                    </div>
                                    <div className='px-4 mt-4'>
                                        <span className='font-light text-sm'>{item.description}</span>
                                    </div>
                                    <div className='newsCardinfo'>
                                        <Image src="/icons/date.svg" width={12} height={12} />
                                        <span className='font-normal text-xs'>{item.date}</span>
                                        <Image src="/icons/author.svg" width={12} height={12} />
                                        <span className='font-normal text-xs'>{item.author}</span>
                                        <Image src="/icons/cmt.svg" width={12} height={12} />
                                        <span className='font-normal text-xs'>{item.cmt}</span>
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

export default Salepage