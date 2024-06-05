'use client'
import React, {useState, useRef} from 'react'
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';


type Props = {}

const Trending = (props: Props) => {
   
    const Trends = [
        {
            id: 1,
            name: 'Green resin earrings',
           image: '/assets/images/trendingImageOne.jpeg'
                },
        {
            id: 1,
            name: 'Brown resin rings',
           image: '/assets/images/trendingImageTwo.jpeg'
                },
        {
            id: 1,
            name: 'Pink Bracelet',
           image: '/assets/images/trendingImageThree.jpeg'
                },
    ]

    const renderTrendingImages = () => {
        return Trends.map((card, index) => (
    <div className='flex justify-center items-center w-full h-[250px]' key={index}>
    <Image src={card.image} alt={card.name} width={300} height={200}/>
    </div>
        ))
    }
//  const renderTrendingNames = () => {
//     return Trends.map((card, index) => (
// <div className='' key={index}>
// <h2 className='text-[20px] leading-[25px] font-[500] text-[#303030] font-sans tracking-normal'>{card.name}</h2>
// </div>
//     ))
// }

const [currentIndex, setCurrentIndex] = useState(0);

    const imageCarouselRef = useRef(null);
    const nameCarouselRef = useRef(null);

    const syncCarousels = (e: EventObject) => {
        setCurrentIndex(e.item);
        if (imageCarouselRef.current) {
            (imageCarouselRef.current as any).slideTo(e.item);
        }
        if (nameCarouselRef.current) {
            (nameCarouselRef.current as any).slideTo(e.item);
        }
    };
  return (
    <div className='flex justify-center items-center w-full h-[400px] py-[20px] mt-[80px] mb-[20px] bg-white'>
<div className="flex justify-center items-center w-[50%]">
<AliceCarousel
                    mouseTracking
                    items={renderTrendingImages()}
                    controlsStrategy="responsive"
                    keyboardNavigation={true}
                    disableButtonsControls={true}
                    autoPlay={true}
                    autoPlayInterval={3000}
                    activeIndex={currentIndex}
                    onSlideChanged={syncCarousels}
                    infinite={true}
                    ref={imageCarouselRef}
                />
</div>

<div className="flex flex-col justify-center items-start w-[50%] ">
<h1 className='py-[20px] text-[26px] leading-[27px] font-[600] text-[#303030] font-karla tracking-normal'>TRENDING IN ACCESSORIES HUB</h1>
{/* <AliceCarousel
                   mouseTracking
                   items={renderTrendingNames()}
                   controlsStrategy="responsive"
                   disableDotsControls
                   keyboardNavigation={true}
                   disableButtonsControls={true}
                   autoPlay={true}
                   autoPlayInterval={3000}
                   activeIndex={currentIndex}
                   onSlideChanged={syncCarousels}
                   infinite={true}
                   ref={nameCarouselRef}
                   
                /> */}
                <p className='pb-[20px] w-[50%] text-[18px] leading-[25px] font-[500] text-[#303030] font-sans tracking-normal'>Elevate your summer looks</p>
                <button className='w-[180px] border-[2px] border-[#64330D] p-2 cursor-pointer text-[16px] leading-[21px] font-[500] text-white bg-[#64330D] hover:bg-[#f2e9dd] hover:text-[#303030] outline-none mb-[20px]'>SHOP NOW</button>

</div>
   
    </div>
  )
}

export default Trending