import Image from 'next/image'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='flex w-full max-h-[500px] mt-[100px] mb-[20px] relative z-[50]'>
<div className="flex flex-col items-start justify-center w-[50%] h-[500px] bg-[#f2e9dd] px-[50px]">
<h1 className='text-[55px] leading-[70px] font-[900] text-[#303030] font-karla tracking-wide'>Where Elegance Meets Radiance</h1>
<p className='text-[18px] leading-[27px] font-[500] text-[#303030] font-karla tracking-wide my-[20px] w-[450px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit Ipsum beatae tenetur.</p>
<button className='w-[150px] border-[2px] border-[#64330D] p-3 cursor-pointer text-[16px] leading-[21px] font-[500] text-[#303030] bg-[#f2e9dd] hover:bg-white'>SHOP NOW</button>
</div>
<div className="w-[50%] h-[500px] relative">
    <Image src='/assets/images/landingPageImage.jpeg' alt='Accessories Hub Landing page' 
      layout='fill' objectFit='cover' className='absolute inset-0 ' />
</div>
    </div>
  )
}

export default Header