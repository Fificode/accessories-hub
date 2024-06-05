'use client'
import Image from 'next/image'
import React from 'react'


type Props = {}

const Header = (props: Props) => {
  return (
    <div className='md:flex md:flex-row max-w-full max-h-[500px] mt-[70px] md:mt-[100px] mb-[20px] relative z-[50]'>
<div className="flex flex-col items-start justify-center w-full md:w-[50%] h-[500px] bg-[#f2e9dd] px-[20px] md:px-[50px]" >
<h1 className='text-[35px] leading-[45px] md:text-[45px] md:leading-[60px] font-[900] text-[#303030] font-karla uppercase tracking-wide' data-aos="fade-right">Where Elegance Meets Radiance</h1>
<p className='text-[14px] md:text-[18px] leading-[27px] font-[500] text-[#303030] font-karla tracking-wide my-[20px] md:w-[450px]' data-aos="fade-right">Lorem ipsum dolor sit amet consectetur, adipisicing elit Ipsum beatae tenetur.</p>
<button className='w-[150px] outline-none border-[2px] border-[#64330D] p-3 cursor-pointer text-[14px] md:text-[16px] leading-[21px] font-[500] text-[#303030] bg-[#f2e9dd] hover:bg-white' data-aos="fade-right">SHOP NOW</button>
</div>
<div className="hidden md:block w-[50%] h-[500px] relative">
    <Image src='/assets/images/landingPageImage.jpeg' alt='Accessories Hub Landing page' 
      layout='fill' objectFit='cover' className='absolute inset-0 ' data-aos="zoom-in-left" />
</div>
    </div>
  )
}

export default Header