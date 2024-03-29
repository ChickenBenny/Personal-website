import React from "react";
import { BsLinkedin, BsGithub, BsMedium, BsFacebook } from "react-icons/bs";

const Hero = () => {
  return (
    <div id='hero' className="w-full h-screen flex text-center">
      <div className='max-w-screen-xl	w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-slate-200'>
            Hello, I&apos;m <span className='text-[#5651e5]'>Benny Hsiao</span>
          </h1>
          <h2 className='hidden md:flex py-2 text-sky-600'>
            Backend | Machine Learning | Finance
          </h2>
          <h2 className='md:hidden py-2 text-sky-600'>
            Backend | Machine Learning
          </h2>          
          <p className='py-4 text-gray-400 m-auto'>
            I&apos;m a backend developer and used to be an auditor. <br />
            Passion in web development and machine learning technology. <br />
          </p>
          <div className='flex item-center justify-between m-auto py-4 px-6'>
            <div className='mx-4 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href='https://www.linkedin.com/in/jen-hung-hsiao-4259651b5/' target='_blank' rel="noreferrer">
                <BsLinkedin className='text-4xl text-slate-200' />
              </a>
            </div>
            <div className='mx-4 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href='https://github.com/ChickenBenny' target='_blank' rel="noreferrer">
                <BsGithub className='text-4xl text-slate-200' />
              </a>
            </div>
            <div className='mx-4 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href='https://medium.com/@ChickenBenny' target='_blank' rel="noreferrer">
                <BsMedium className='text-4xl text-slate-200' />
              </a>
            </div>
            <div className='mx-4 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href='https://www.facebook.com/profile.php?id=100000226069203' target='_blank' rel="noreferrer">
                <BsFacebook className='text-4xl text-slate-200' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;