import React from "react";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BsLinkedin, BsGithub, BsMedium, BsFacebook } from "react-icons/bs";

const Navbar = () => {
  const [show, setShow] = useState(false);
  
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className='flex pl-4 items-center'>
          <FaHome size={40} />
          <p className='pl-4 text-xl'>Chicken</p>
          <p className='text-xl font-semibold'>Benny</p>
        </div>
        <div>
          <ul className='hidden md:flex pr-4'>  
            <Link href='/'>
              <li className="ml-10 text-xl font-semibold uppercase hover:border-b">Home</li>
            </Link>
            <Link href='#about'>
              <li className="ml-10 text-xl font-semibold uppercase hover:border-b">About</li>
            </Link>
            <Link href='#skill'>
              <li className="ml-10 text-xl font-semibold uppercase hover:border-b">Skill</li>
            </Link>
            <Link href='#project'>
              <li className="ml-10 text-xl font-semibold uppercase hover:border-b">Project</li>
            </Link>
            <Link href='#contact'>
              <li className="ml-10 text-xl font-semibold uppercase hover:border-b">Contact</li>
            </Link>
          </ul>
          <div onClick={handleShow} className='pr-4 md:hidden'>
            <AiOutlineMenu size={30} className='md:hidden text-xl font-semibold' />
          </div>
        </div>
      </div>
      {show && (
        <div className='fixed right-0 top-0 w-full h-screen bg-black/70'>
          <div className='fixed right-0 top-0 sm:w-[50%] h-screen bg-[#ecf0f3] p-8 ease-in duration-500'>
            <div className='flex w-full items-center justify-between'>
              <div className='flex items-center'>
                <FaHome size={40} className='text-black'/>
                <p className='text-xl text-black pl-4'>Chicken</p>
                <p className='text-xl font-semibold text-black	'>Benny</p>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose onClick={handleShow} className='text-black'/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4 text-black' />
            <div>
              <ul>
              <Link href='/'>
                <li className="px-4 py-4 text-xl font-semibold text-black uppercase hover:border-b">Home</li>
              </Link>
              <Link href='#about'>
                <li className="px-4 py-4 text-xl font-semibold text-black uppercase hover:border-b">About</li>
              </Link>
              <Link href='#skill'>
                <li className="px-4 py-4 text-xl font-semibold text-black uppercase hover:border-b">Skill</li>
              </Link>
              <Link href='#project'>
                <li className="px-4 py-4 text-xl font-semibold text-black uppercase hover:border-b">Project</li>
              </Link>
              <Link href='#contact'>
                <li className="px-4 py-4 text-xl font-semibold text-black uppercase hover:border-b">Contact</li>
              </Link>
              </ul>
            </div>
            <div className='border-b border-gray-300 my-4 text-black' />
            <div className='flex justify-between items-center py-4'>
              <a className='pl-4' href='https://www.linkedin.com/in/jen-hung-hsiao-4259651b5/'>
                <BsLinkedin className='text-4xl text-black' />
              </a>
              <a className='pl-4' href='https://github.com/ChickenBenny'>
                <BsGithub className='text-4xl text-black' />
              </a>
              <a className='pl-4' href='https://medium.com/@ChickenBenny'>
                <BsMedium className='text-4xl text-black' />
              </a>            
              <a className='pl-4' href='https://www.facebook.com/profile.php?id=100000226069203'>
                <BsFacebook className='text-4xl text-black' />
              </a>
            </div>
            <div className='py-4'>
              <p className='text-center	text-black'>© 2023 Chicken Benny</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;