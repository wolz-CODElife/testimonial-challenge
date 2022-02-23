import React from 'react'
import { NavMenuLists } from '../data/navmenu'


const Navbar = () => {
  return (
    <div className='border-b-[1px] border-b-border-grey h-16 fixed top-0 z-50 bg-white w-full md:flex'>
        <div className='md:flex flex-auto items-center'>
            <img src="https://i.postimg.cc/P56Q4DFy/image.png" alt="Logo" className='h-6 mx-8' />
            {NavMenuLists.map(menu => (
                <a href={menu.link} key={menu.title} className="flex items-center mx-4 text-lable-secondary text-base font-semibold"><img src={menu.icon.url} alt={menu.title} className={`${menu.icon.height} mr-3`} /> {menu.title}</a>
            ))}
        </div>
        <div className='md:flex flex-1 min-w-max items-center justify-end'>
            <a href="/" className='mx-5 hover:scale-110'>
                <img src="https://i.postimg.cc/wvbMvhFt/image.png" className='h-6' alt="Social Media Reward" />
            </a>
            <a href="/" className='mx-5 hover:scale-110'>
                <img src="https://i.postimg.cc/DyQWQbwN/image.png" className='h-6' alt="Social Media Reward" />
            </a>
            <a href="/" className='mx-5 hover:scale-110 bg-btn-cream shadow-[0px_4px_24px_rgba(156,130,38,0.4)] p-3 rounded-lg relative'>
                <span className='h-6 w-6 flex items-center justify-center text-white bg-wine absolute rounded-full right-[-10px] top-[-5px]'>2</span>
                <img src="https://i.postimg.cc/xC9pCmqS/image.png" className='h-5' alt="Social Media Reward" />
            </a>
            <a href="/" className='mx-5 relative'>
                <span className='h-6 w-6 flex items-center justify-center text-white border-4 border-white bg-wine absolute rounded-full right-[-10px] top-[-10px]'>&nbsp;</span>
                <img src="https://i.postimg.cc/c4RHR6S6/image.png" className='h-10 w-24' alt="Social Media Reward" />
            </a>
            <a href="/" className='mx-5'>
                <img src="https://i.postimg.cc/Jn563bPP/image.png" className='h-11 w-11 rounded-full' alt="User profile" />
            </a>
            <a href="/" className='mr-10'>
                <img src="https://i.postimg.cc/8c3hLcQZ/image.png" className='h-4 w-4' alt="menu" />
            </a>
        </div>
    </div>
  )
}

export default Navbar