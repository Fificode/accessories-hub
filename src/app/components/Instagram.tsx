'use client'
import React from 'react'
import Image from 'next/image'

type Props = {
    image: string;
}

const Instagram = (props: Props) => {
  return (
    <div className='flex flex-col justify-center max-w-[400px] max-h-[400px] mx-[40px] my-[20px]'>
         <div className="w-[300px] h-[350px] relative">
            <Image src={props.image} alt={`Instagram Cover`} layout='fill' objectFit='cover' className='absolute inset-0 '/>
        </div>
    </div>
  )
}

export default Instagram