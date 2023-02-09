import React from "react";

const Achievement = () => {
  return (
    <div className='px-12 my-6 grid grid-cols-2 lg:grid-cols-4 gap-4 '>
      <div className='h-36 p-6 bg-[#212D45] rounded-xl'>
        <p className='pb-4 text-3xl font-semibold text-white'>
          300 + 
        </p>
        <p className='text-lg text-gray-400'>
          Github Stars
        </p>
      </div>
      <div className='h-36 p-6 bg-[#212D45] rounded-xl'>
        <p className='pb-4 text-3xl font-semibold text-white'>
          50 + 
        </p>
        <p className='text-lg text-gray-400'>
          Github Followers
        </p>
      </div>
      <div className='h-36 p-6 bg-[#212D45] rounded-xl'>
        <p className='pb-4 text-3xl font-semibold text-white'>
          20 + 
        </p>
        <p className='text-lg text-gray-400'>
          Open Source Projects
        </p>
      </div>
      <div className='h-36 p-6 bg-[#212D45] rounded-xl'>
        <p className='pb-4 text-3xl font-semibold text-white'>
          10 + 
        </p>
        <p className='text-lg text-gray-400'>
          Technical Articles
        </p>
      </div>
    </div>
  )
}

export default Achievement;