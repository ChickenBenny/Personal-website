import React from "react";

const Experience = () => {
  return (
    <div id='experience' className="w-full min-h-screen flex">
      <div className='max-w-screen-xl	w-full h-full my-10 mx-auto p-2 pt-10 justify-center items-center'>
        <p className='text-center py-2 text-2xl text-slate-200'>
          EXPERIENCE
        </p>
        <h2 className='text-center py-4 text-amber-300'>
          Work Experience
        </h2>
        <div className='py-8 mx-10'>
          <ol class="px-2 relative border-l border-gray-200 dark:border-gray-700">                  
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">Nov 2022 - Now</time>
              <p class="text-3xl font-semibold text-white">
                Yourator
              </p>
              <p class="text-2xl font-normal text-white">
                Software Engineer Intern
              </p>
              <p className='text-lg text-gray-400'>
                - Build talent recommended service with cronJob and backend API.
              </p>
              <p className='text-lg text-gray-400'>
                - Build a contract service with Pay2Go API.
              </p>
              <p className='text-lg text-gray-400'>
                - Build credit card auto renew service with Taypay API.
              </p>
              <p className='text-lg text-gray-400'>
                - Build frontend components and integrate it with a backend API.
              </p>
              <p className='text-lg text-gray-400'>
                - Implement end-to-end testing with the web platform using Cypress.
              </p>
              <p className='text-lg text-gray-400'>
                - Implement unit test and integration test with Rspec.
              </p>
              <p className='text-lg text-gray-400'>
                - Participate sprint planning, refinement and code review every week.
              </p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">Jun 2022 - Sep 2022</time>
              <p class="text-3xl font-semibold text-white">
                Bank SinoPac
              </p>
              <p class="text-2xl font-normal text-white">
                Software Engineer Intern
              </p>
              <p className='text-lg text-gray-400'>
                - Used Apache airflow and data preprocessing techniques to achieve an 80% improvement in performance on an experiment service.
              </p>
              <p className='text-lg text-gray-400'>
                - Implemented load balancing to solve concurrency issues, improving the scalability and reliability of the system.
              </p>
              <p className='text-lg text-gray-400'>
                - Used master-slave replication to enhance stability and ensure high availability of the system.
              </p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">Sep 2019 - May 2021</time>
              <p class="text-3xl font-semibold text-white">
                PwC Taiwan
              </p>
              <p class="text-2xl font-normal text-white">
                Auditor
              </p>
              <p className='text-lg text-gray-400'>
                - IPO (initial public offering) process, auditing internal control systems and implementing WalkThrough Test.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Experience