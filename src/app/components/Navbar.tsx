'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import NavbarModal from './NavbarModal'

type Props = {}

const Navbar = (props: Props) => {

    const [showNavbarModal, setShowNavbarModal] = useState(false);

    const handleOpenNavbarModal = () => {
        setShowNavbarModal(!showNavbarModal);
    }
  return (
    <div className='w-[100vw] h-[80px] md:h-auto shadow-md py-2 fixed top-0 z-[100] bg-white'>
        
         <div className="w-full flex items-center justify-between md:hidden">
         <div className="flex md:hidden items-center py-[15px]">
        <Image src="/assets/images/Logo.png" alt="Logo of Accessories HUB" width={20} height={20} className=' mx-[10px]' />
           <h1 className='font-karla text-[16px] font-[700] tracking-[2px] '>ACCESSORIES HUB</h1>
        </div>
        <div className="mx-[5px]">
        <button className="w-[24px] h-[24px] md:hidden block  cursor-pointer"  onClick={handleOpenNavbarModal}>
         <Image
        className=''
        src={showNavbarModal ? '/assets/images/CloseIcon.svg' : '/assets/images/MenuIcon.svg'}
        alt="Menu Icon"
        height={24}
        width={24}
              
        />
         </button>
         </div>
      </div>

        <div className='hidden md:flex items-center'>
        <div className="flex flex-col w-full justify-end">
            <div className="h-[50px]"></div>
            <div className="border-[#C4C4C4] border w-full"></div>
            <div className="flex justify-around items-center py-[15px] ml-[20px]">
                <button className='text-sm font-medium cursor-pointer text-[#303030] font-sans'>HOME</button>
                <button className='text-sm font-medium cursor-pointer text-[#303030] font-sans'>ABOUT</button>
            </div>
        </div>
<div className="flex flex-col w-[60%] items-center mx-[20px]">
        <Image src="/assets/images/Logo.png" alt="Logo of Accessories HUB" width={25} height={25} className='py-[5px]' />
           <h1 className='font-karla text-[22px] font-[700] tracking-[2px] text-center'>ACCESSORIES HUB</h1>
        </div>
        <div className="flex flex-col w-full">
        <div className="flex justify-end h-[50px] mr-[85px]">
                <button className='mx-[10px]'>
                <Image src="/assets/images/SearchIcon.svg" alt="Search Icon" width={16} height={18}/>
                </button>
                <button className='mx-[10px]'>
                <Image src="/assets/images/LikesIcon.svg" alt="Shop Icon" width={18} height={18}/>
                </button>
                <button className='mx-[10px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[18px] h-[18px]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg> 
            
                </button>
            </div>
            <div className="">
            <div className="border-[#C4C4C4] border w-full"></div>
            <div className="flex justify-around items-center py-[15px] mr-[20px]">
                <div className="flex">
                <button className='text-sm font-medium cursor-pointer text-[#303030] font-sans'>SHOP</button>
            <button>
                <Image src='/assets/images/ArrowdownIcon.svg' alt="Drop down icon" width={15} height={15} className='mx-[5px]'/>
            </button>
                </div>
                <div className="flex">
                <button className='text-sm font-medium cursor-pointer text-[#303030] font-sans'>COLLECTIONS</button>
                <button><Image src='/assets/images/ArrowdownIcon.svg' alt="Drop down icon" width={15} height={15} className='mx-[5px]'/>
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
        {showNavbarModal && (
            <NavbarModal  />
        )}
    </div>
  )
}

export default Navbar