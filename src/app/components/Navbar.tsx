'use client'
import React from 'react'
import Image from 'next/image'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex items-center w-full'>
        <div className="flex flex-col w-full justify-end">
            <div className="h-[18px]"></div>
            <div className="border-black border"></div>
            <div className="flex">
                <h2>Home</h2>
                <h2>About</h2>
            </div>
        </div>
<div className="flex flex-col w-[50%] items-center">
        <Image src="/assets/images/Logo.png" alt="Logo of Accessories HUB" width={50} height={50} />
           <h1>ACCESSORIES HUB</h1>
        </div>
        <div className="flex flex-col w-full">
        <div className="flex justify-end">
                <button>
                <Image src="/assets/images/SearchIcon.svg" alt="Search Icon" width={18} height={18}/>
                </button>
                <button>
                <Image src="/assets/images/LikeIcon.svg" alt="Like Icon" width={18} height={18}/>  
                </button>
                <button>
                <Image src="/assets/images/SearchIcon.svg" alt="Shop Icon" width={18} height={18}/>
                </button>
            </div>
            <div className="">
            <div className="border-black border"></div>
            <div className="flex">
                <h2>Shop</h2>
                <h2>Collections</h2>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar