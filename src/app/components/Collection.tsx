'use client'
import Image from 'next/image'
import React from 'react'

type Props = {
    name: string;
    image: string;
}

const Collection = (props: Props) => {
   

  return (
    <div className='flex flex-col justify-center max-w-[300px] md:max-w-[400px] max-h-[400px] mx-[10px] md:mx-[40px] my-[20px]' data-aos="zoom-in">
        <div className="w-[250px] h-[300px] md:w-[300px] md:h-[350px] relative">
            <Image src={props.image} alt={`${props.name} Cover`} layout='fill' objectFit='cover' className='absolute inset-0 '/>
        </div>
        <div className="">
            <button className='border-none py-[20px] underline underline-offset-4 text-[14px] md:text-[16px] leading-[27px] font-[500] text-[#303030] font-sans tracking-normal'>{props.name}</button>
            </div>
    </div>
  )
}

export default Collection