'use client'
import React from 'react'
import Collection from './Collection'

type Props = {}

const LimitedCollection = (props: Props) => {

    const Collections = [
        {
    id: 1,
    name: 'Necklaces',
    image: '/assets/images/NecklaceCoverImage.jpeg',
    
    },
        {
    id: 2,
    name: 'Rings',
    image: '/assets/images/ringsCoverImage.jpeg',
    
    },
        {
    id: 3,
    name: 'Bracelets',
    image: '/assets/images/BraceletCoverTwo.jpeg',
    
    },
        {
    id: 4,
    name: 'Waist chain',
    image: '/assets/images/waistchainCoverImage.jpeg',
    
    },
        {
    id: 5,
    name: 'Anklets',
    image: '/assets/images/AnkletCoverImage.jpeg',
    
    },
        {
    id: 6,
    name: 'Earrings',
    image: '/assets/images/EarringCoverImage.jpeg',
    
    },
    
    ]
    

  return (
    <div className='flex flex-col justify-center items-center'>
       <h2 className='text-[20px] md:text-[24px] leading-[27px] font-[600] text-[#303030] font-sans tracking-normal text-center mt-[50px] px-[10px] mb-[20px] uppercase'>Shop our Limited Collection</h2>
       <div className="flex justify-center items-center flex-wrap">
        {
            Collections.map((card, index) => (
<Collection key={index} name={card.name} image={card.image}/>
            ))}
       </div>
        </div>
  )
}

export default LimitedCollection