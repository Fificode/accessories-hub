import React from 'react'
import Image from 'next/image'

type Props = {}

const NavbarModal = (props: Props) => {
  return (
    <div>
         <div className="fixed z-[100] left-0 top-[50px] w-[100vw] animate-scale-up-right" >
         {/* <div className="flex justify-end h-[50px] items-start pt-[20px]">
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
            </div> */}
    <div className='flex justify-center items-center bg-white py-[20px] w-[100%] h-auto'>
              <ul className='w-full list-none flex flex-col items-center cursor-pointer'>
                    <li className='py-[10px]'>
                        <a className='relative overflow-hidden inline-block py-[10px] text-[14px] leading-[11.14px] text-[#333333] font-[500] text-center '>Home</a>
                    </li>
                    <li className='py-[10px]'>
                        <a className='relative overflow-hidden inline-block py-[10px] text-[14px] leading-[11.14px] text-[#333333] font-[500] text-center'>About</a>
                    </li>
                    <li className='flex py-[10px]'>
                        <a className='relative overflow-hidden inline-block py-[10px] text-[14px] leading-[11.14px] text-[#333333] font-[500] text-center' >
                            Shop
                            
                        </a>
                       <Image src='/assets/images/ArrowdownIcon.svg' alt="Drop down icon" width={10} height={10} className='mx-[5px]'/>
                    </li>

                    <li className='flex py-[10px]'>
                        <a className='relative overflow-hidden inline-block py-[10px] text-[14px] leading-[11.14px] text-[#333333] font-[500] text-center'  >
                            Collections
                        </a>
                        <Image src='/assets/images/ArrowdownIcon.svg' alt="Drop down icon" width={10} height={10} className='mx-[5px]'/>
                    </li>
                    
                    </ul>
        </div>
        </div>
  
    </div>
  )
}

export default NavbarModal