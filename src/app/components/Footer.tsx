import Image from 'next/image'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full h-auto md:h-[180px] bg-[#64330D] p-4 mt-[50px] flex flex-col  md:flex-row md:justify-between text-white'>
        <div className="flex flex-col w-full md:w-[33.33%]">
            <p className=''>Follow us</p>
<div className="flex py-[10px]">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-[20px] h-[20px] cursor-pointer ' fill='#fff'><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-[20px] h-[20px] cursor-pointer mx-[5px]' fill='#fff'><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
</div>
        </div>
        <div className="w-full md:w-[33.33%] flex flex-col md:items-center">
            <div className="bg-white hidden md:flex w-[50px] items-center justify-center rounded-[50%] h-[70px]"><Image src="/assets/images/Logo.png" alt="Logo of Accessories HUB" width={25} height={25}/></div>
            <p className='py-[10px]'>ACCESSORIES HUB</p>
            <p className=''>&copy; 2024 Accessories Hub All Rights Served</p>
        </div>
        <div className="w-full md:w-[33.33%] my-[10px] md:my-0">
            <form className="flex flex-col justify-center md:items-end">
                <label>SUBSCRIBE TO OUR MAILING LIST</label>
               <div className="flex py-[10px]"><input type="email" placeholder='Enter Email address' className='w-[200px] p-3'/>
                <button className='border-[2px] border-black p-3 bg-black cursor-pointer text-[16px] leading-[21px] font-[500] text-white'>Send</button>
                </div> 
            </form>
        </div>
    </div>
  )
}

export default Footer