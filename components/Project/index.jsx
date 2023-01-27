import React from "react";
import jobPlatform from "@/public/assets/projects/job_platform.png";
import airflowTurtorail from "@/public/assets/projects/airflow_tutorial.png";
import ganStock from "@/public/assets/projects/gan_stock.png";
import redisCheatsheet from "@/public/assets/projects/redis_cheatsheet.png";
import scrapyEtl from "@/public/assets/projects/scrapy_etl.png";
import vaeStock from "@/public/assets/projects/vae_stock.png";
import ProjectContainer from "../ProjectContainer";

const Project = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-screen-xl mx-auto  px-2 py-16'>
        <h2 className='py-2 text-2xl text-slate-200'>
          Project
        </h2>
        <h2 className='text-amber-300'>
          What I've Built
        </h2>
        <div className='my-6 grid md:grid-cols-2 gap-8'>
          <ProjectContainer
            imageUrl={jobPlatform}
            title='Job Platform'
            tech='FastAPI - React - Postgres - Airflow - Docker'
            linkUrl='https://github.com/ChickenBenny/job-platform'
          />
          <ProjectContainer
            imageUrl={airflowTurtorail}
            title='Airflow Tutorial'
            tech='Ariflow - Docker - Python'
            linkUrl='https://github.com/ChickenBenny/Airflow-tutorial'
          />
          <ProjectContainer
            imageUrl={ganStock}
            title='Stock Prediction with GAN and WGAN'
            tech='Python - Pytorch - GAN'
            linkUrl='https://github.com/ChickenBenny/Stock-prediction-with-GAN-and-WGAN'
          />
          <ProjectContainer
            imageUrl={scrapyEtl}
            title='Airflow Scrapying ETL Tutorial'
            tech='Python - Scrapy - Airflow - Docker - Postgres'
            linkUrl='https://github.com/ChickenBenny/Airflow-scrapying-ETL-tutorial'
          />
          <ProjectContainer
            imageUrl={redisCheatsheet}
            title='Redis Cluster Cheatsheet'
            tech='Redis - Bash - Docker'
            linkUrl='https://github.com/ChickenBenny/redis-cluster-docker'
          />
          <ProjectContainer
            imageUrl={vaeStock}
            title='Stock Prediction with VAE'
            tech='Python - Pytorch - VAE'
            linkUrl='https://github.com/ChickenBenny/VAE-in-predicting-stock'
          />
        </div>
      </div>
    </div>
  )
}

export default Project