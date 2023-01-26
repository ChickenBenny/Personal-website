import React from "react";
import Skill from "../Skill";

const About = () => {
  return (
    <div className='w-full min-h-screen flex text-center'>
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
        <Skill />
      </div>
    </div>
  );
}

export default About;