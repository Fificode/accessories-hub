'use client'
import Image from 'next/image'
import React from 'react'

type Props = {}

const AccessoriesIcons = (props: Props) => {
  return (
    <div className='flex justify-center items-center my-[30px] mx-[20px] max-w-full'>
        <div className="flex flex-col md:flex-row  justify-center items-center ">
        <div className="w-[150px] h-[150px] mx-[10px] flex flex-col justify-center items-center" data-aos="zoom-in">
            <Image src='/assets/images/BraceletIcon.png' alt='Bracelet Icon' width={50} height={50}/>
            <h2 className='text-[18px] leading-[27px] font-[500] text-[#303030] font-sans tracking-normal py-[10px]'>Bracelets</h2>
        </div>
        <div className="w-[150px] h-[150px] mx-[10px] flex flex-col justify-center items-center" data-aos="zoom-in">
            <Image src='/assets/images/NecklaceIcon.png' alt='Necklace Icon' width={50} height={50}/>
            <h2 className='text-[18px] leading-[27px] font-[500] text-[#303030] font-sans tracking-normal py-[10px]'>Necklaces</h2>
        </div>
        <div className="w-[150px] h-[150px] mx-[10px] flex flex-col justify-center items-center" data-aos="zoom-in">
            <Image src='/assets/images/RingIcon.png' alt='Ring Icon' width={50} height={50}/>
            <h2 className='text-[18px] leading-[27px] font-[500] text-[#303030] font-sans tracking-normal py-[10px]'>Rings</h2>
        </div>
        <div className="w-[150px] h-[150px] mx-[10px] flex flex-col justify-center items-center" data-aos="zoom-in">
            <Image src='/assets/images/EarringsIcon.png' alt='Earrings Icon' width={50} height={50}/>
            <h2 className='text-[18px] leading-[27px] font-[500] text-[#303030] font-sans tracking-normal py-[10px]'>Earrings</h2>
        </div>
        <div className="w-[150px] h-[150px] mx-[10px] flex flex-col justify-center items-center" data-aos="zoom-in">
            <Image src='/assets/images/AnkletIcon.png' alt='Anklet Icon' width={50} height={50}/>
            <h2 className='text-[18px] leading-[27px] font-[500] text-[#303030] font-sans tracking-normal py-[10px]'>Anklets</h2>
        </div>
        <div className="w-[150px] h-[150px] mx-[10px] flex flex-col justify-center items-center" data-aos="zoom-in">
            <Image src='/assets/images/WaistchainIcon.png' alt='Bracelet Icon' width={50} height={50}/>
            <h2 className='text-[18px] leading-[27px] font-[500] text-[#303030] font-sans tracking-normal py-[10px]'>Waist Chains</h2>
        </div>
        </div>
    </div>
  )
}

export default AccessoriesIcons