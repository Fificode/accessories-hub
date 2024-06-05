'use client'
import React from 'react'
import Image from 'next/image'

type Props = {
    image: string;
}

const Instagram = (props: Props) => {
  return (
    <div className='flex flex-col justify-center max-w-[300px] md:max-w-[400px] max-h-[400px] md:mx-[40px] my-[20px]'>
         <div className="w-[250px] h-[300px] md:w-[300px] md:h-[350px] relative" data-aos="zoom-in">
            <Image src={props.image} alt={`Instagram Cover`} layout='fill' objectFit='cover' className='absolute inset-0 '/>
        </div>
    </div>
  )
}

export default Instagram