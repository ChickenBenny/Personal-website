import React from "react";
import { SiRubyonrails, SiFastapi, SiRedis, SiPostgresql, SiMysql, SiReact, SiApacheairflow, SiPytorch } from "react-icons/si";

const About = () => {
  return (
    <div className='w-full h-screen flex text-center'>
      <div className='max-w-screen-xl	w-full mx-auto p-2 flex flex-col justify-center items-center'>
        <div>
          <p className='py-2 text-2xl text-slate-200'>
            ABOUT
          </p>
          <h2 className='text-slate-400-'>
            More About Me
          </h2>
          <p className='py-2 text-gray-400 m-auto'>
            台北和台南來回跑得軟體工程師。喜歡分析數據和學習新的技術。<br />
            目前還在轉職的路途中，朝著夢想中前進著。<br />
            假日喜歡和朋友一起打籃球、做瑜伽和找尋自我。
          </p>
          <div className='border-b border-green-300 my-4 text-black' />
        </div>
        <h2 className='py-4 text-slate-400-'>
            I'm familiar with..
        </h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>          
          <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiRubyonrails size='3rem' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Ruby on Rails</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiFastapi size='2rem' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>FastAPI</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiRedis size='2rem' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Redis</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiPostgresql size='2rem' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PostgresSQL</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiMysql size='2rem' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MySQL</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiApacheairflow size='2rem' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Airflow</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiPytorch size='2rem' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PyTorch</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiReact size='2rem' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>ReacJS</h3>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default About;