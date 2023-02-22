import React from "react";
import { WebSkills, DataSkills } from "@/constants";
import SkillContainer from "../SkillContainer";

const Skill = () => {
  return (
    <div>
      <p className='py-2 text-2xl text-slate-200'>
        I am familiar with
      </p>
      <h2 className='text-amber-300'>
        Web development
      </h2>
      <div className='py-2 grid grid-cols-3 lg:grid-cols-4 gap-4'>
        {WebSkills.map((skill) => (
          // eslint-disable-next-line react/jsx-key
          <SkillContainer icon={skill.icon} name={skill.name} />
        ))}        
      </div>

      <h2 className='pt-2 text-amber-300'>
        Data Engineering
      </h2>
      <div className='py-2 grid grid-cols-3 lg:grid-cols-4 gap-8'>          
        {DataSkills.map((skill) => (
          // eslint-disable-next-line react/jsx-key
          <SkillContainer icon={skill.icon} name={skill.name} />
        ))}
      </div>     
    </div>
  )
}

export default Skill