'use client'
import React, {useState} from 'react'
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';

type Props = {}

const Reviews = (props: Props) => {
    const [disablePrevButton, setDisablePrevButton] = useState(false);
    const [disableNextButton, setDisableNextButton] = useState(false);

 

const Reviews = [
    {
id: 1,
name: 'Funke',
location: 'Lagos, Nigeria',
comment: 'Thank you so much, I really love the jewelry.'
    },
    {
id: 2,
name: 'Marvel',
location: 'Lagos, Nigeria',
comment: 'Thank you so much, I really love the jewelry.'
    },
    {
id: 3,
name: 'Firdaws',
location: 'Lagos, Nigeria',
comment: 'Thank you so much, I really love the jewelry.'
    },
    {
id: 4,
name: 'Toyyibat',
location: 'Lagos, Nigeria',
comment: 'Thank you so much, I really love the jewelry.'
    },
    {
id: 5,
name: 'Tosin',
location: 'Lagos, Nigeria',
comment: 'Thank you so much, I really love the jewelry.'
    },
]

const handleSlideChanged = (event: EventObject) => {
    const { item } = event;
    setDisablePrevButton(item === 0);
    setDisableNextButton(item === Reviews.length - 1);
};

const renderReviews = () => {
    return Reviews.map((card, index) => (
<div className='flex flex-col items-center' key={index}>
<p className='text-[18px] leading-[25px] font-[500] text-[#303030] font-sans tracking-normal text-center mb-[20px]'>{card.comment}</p>
<h3 className='text-[20px] leading-[25px] font-[600] text-[#303030] font-sans tracking-normal text-center '>{card.name} - {card.location} </h3>
</div>
    ))
}

  return (
    <div className='w-full h-[250px] flex flex-col justify-center items-center p-4 bg-[#f2e9dd] my-[20px]'>
<h2 className='text-[26px] leading-[27px] font-[700] text-[#303030] font-inter tracking-normal text-center py-[20px]'>REVIEWS FOR ACCESSORIES HUB</h2>
<AliceCarousel
                    mouseTracking
                    items={renderReviews()}
                    controlsStrategy="responsive"
                    disableDotsControls
                    keyboardNavigation={true}
                    disableButtonsControls={false}
                    onSlideChanged={handleSlideChanged}
                    renderPrevButton={({isDisabled}) => {
                        return <button className={`p-4 absolute left-[100px] -top-[20px] ${isDisabled && 'pointer-events-none opacity-[0.5]'}`} disabled={disablePrevButton}>
                            <Image src='/assets/images/Arrowlefticon.svg' alt="Arrow left Icon" width={18} height={18} /></button>
                      }}
                      renderNextButton={({isDisabled}) => {
                        return <button className={`p-4 absolute  right-[100px] -top-[20px] ${isDisabled && 'pointer-events-none  opacity-[0.5]'}`} disabled={disableNextButton}>
                            <Image src='/assets/images/Arrowrighticon.svg' alt="Arrow right Icon" width={18} height={18} /></button>
                      }}
                />
    </div>
  )
}

export default Reviews