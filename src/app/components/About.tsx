'use client'
import Image from 'next/image'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='relative max-w-full h-[300px] mt-[20px] mb-[20px] '>
        <Image src='/assets/images/AboutOne.jpeg' alt='About Landing Page' layout='fill' objectFit='cover' className='absolute inset-0'/>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-[10px]">
        <h2 className="text-white text-[24px] md:text-[28px] leading-[34px] font-[500] tracking-wide font-karla text-center" data-aos="fade-down">WE ARE ACCESSORIES HUB</h2>
        <p className='text-white text-[14px] md:text-[18px] leading-[25px] tracking-normal font-[400] font-karla my-[30px] md:w-[400px] text-center' data-aos="fade-down">Our pieces are a merge of luxury, casual and vintage for everyday wear.</p>
        <button className='w-[150px] md:w-[180px] border-none p-2 cursor-pointer text-[14px] md:text-[16px] leading-[21px] font-[500] text-[#303030] bg-[#f2e9dd] hover:bg-white outline-none' data-aos="fade-down">ABOUT</button>
      </div>
    </div>
  )
}

export default About