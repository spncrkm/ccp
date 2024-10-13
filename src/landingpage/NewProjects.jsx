import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { style } from '../style.js'
import { experiences } from '../projects/projects.js'
import { textVariant } from '../components/utils/motion.js'
import SectionWrapper from '../hoc/SectionWrapper.jsx'



const NewProjects = ({ experience }) => (
  <VerticalTimelineElement
    className='vertical-timeline-element--border'
    contentStyle={{ background: '#2f8ba1', color: '#fff'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon}
          alt={experience.company_name}
          className='icon_img' />
      </div>
    }>
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'>
              {point}
            </li>
        ))}
      </ul>
    </VerticalTimelineElement>
)

const Projects = () => {


  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${style.sectionHeadText} text-center`}
        >Projects</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline className='custom-line'>
          {experiences.map((experience, index) => (
            <NewProjects key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "work")
