'use client'
import React from 'react'
import Image from 'next/image'

type Props = {}

const HolidayGifts = (props: Props) => {
  return (
    <div className='flex flex-col lg:flex-row max-w-full my-[10px]'>
<div className="w-full lg:w-[33.33%]  relative h-[400px] flex justify-center items-center shadow-sm" data-aos="zoom-in">
<Image src='/assets/images/ForHer.jpeg' alt='About Landing Page' layout='fill' objectFit='cover' className='absolute inset-0'/>
<div className="absolute inset-0 flex flex-col items-center justify-center">
       <button className='text-white text-[20px] leading-[21px] font-[600] font-roboto tracking-wider underline underline-offset-4'>FOR HER</button>
       </div>
    </div>
<div className="w-full lg:w-[33.33%]  relative h-[400px] flex justify-center items-center my-[10px] lg:mx-[10px] lg:my-0 shadow-sm" data-aos="zoom-in">
<Image src='/assets/images/ForHim.jpeg' alt='About Landing Page' layout='fill' objectFit='cover' className='absolute inset-0'/>
<div className="absolute inset-0 flex flex-col items-center justify-center">
       <button className='text-white text-[20px] leading-[21px] font-[600] font-roboto tracking-wider underline underline-offset-4'>FOR HIM</button>
       </div>
    </div>

<div className="w-full lg:w-[33.33%] h-[400px] flex flex-col justify-center items-start bg-[#f2e9dd] px-[20px] py-[20px] lg:py-0">
    <h2 className='text-[20px] md:text-[24px] leading-[27px] font-[700] text-[#303030] font-sans tracking-wider' data-aos="fade-up">HOLIDAY GIFTS</h2>
    <p className='text-[16px] md:text-[18px] leading-[27px] font-[500] text-[#303030] font-sans tracking-normal my-[25px]' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sequi quasi velit dolore iure repellat perspiciatis animi, nam nihil eos.</p>
    <button className='w-[150px] border-[2px] border-[#64330D] p-2 cursor-pointer text-[14px] md:text-[16px] leading-[21px] font-[500] text-[#303030] bg-[#f2e9dd] hover:bg-white outline-none' data-aos="fade-up">EXPLORE</button>
    </div>
    </div>
  )
}

export default HolidayGifts