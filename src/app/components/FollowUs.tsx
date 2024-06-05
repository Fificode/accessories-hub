'use client'
import React from 'react'
import Instagram from './Instagram'

type Props = {}

const FollowUs = (props: Props) => {

    const InstagramInfo = [
        {
    id: 1,
    image: '/assets/images/instagramImageOne.jpeg',
    
    },
        {
    id: 2,
    image: '/assets/images/instagramImageTwo.jpeg',
    
    },
        {
    id: 3,
    image: '/assets/images/instagramImageThree.jpeg',
    
    },
        {
    id: 4,
    image: '/assets/images/instagramImageFour.jpeg',
    
    },
        {
    id: 5,
    image: '/assets/images/instagramImageFive.jpeg',
    
    },
        {
    id: 6,
    image: '/assets/images/instagramImageSix.jpeg',
    
    },
]

  return (
        <div className='max-w-full flex flex-col justify-center items-center my-[10px]'>
       <h2 className='text-[20px] md:text-[24px] leading-[27px] font-[600] text-[#303030] font-sans tracking-normal text-center mt-[50px] mb-[20px] uppercase' data-aos="zoom-in">FOLLOW US ON INSTAGRAM</h2>
       <a href="https://www.instagram.com/accessorieshubworld?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className='font-[600] text-[16px] md:text-[18px] text-[#303030] font-sans tracking-normal underline underline-offset-4 my-[10px]' data-aos="zoom-in">@accessorieshubworld</a>
       <div className="flex justify-center items-center flex-wrap">
        {
            InstagramInfo.map((card, index) => (
<Instagram key={index}  image={card.image}/>
            ))}
       </div>
        </div>
    
  )
}

export default FollowUs