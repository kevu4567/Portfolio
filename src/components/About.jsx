import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 
        min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
        </motion.div>
        </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Computer Science graduate from University of Illinois, Chicago. I
        have an experience of building web applications from last year. I'm
        learning web development and I'm very passionate about it. I want to be
        a full-stack developer. I built this website with React Three Fiber,
        Tailwind, and Framer Motion. Also, I loaded some 3D models and added 3D
        animations to look cool. I'm quick learner and collaborate closely with
        clients to create efficient, scalable, and user-friendly web
        applications. Let's work together to bring your ideas to life!
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        The technology industry is constantly evolving, so keeping updated in the new 
        technological trends becomes a crutial for everybody working in IT. Cloud computing is
        becoming more and more important nowadays, so I got my fundamentals in Cloud computing 
        with Azure. I have completed Azure licence from Microsoft AZ-900 Cloud Fundamental certification.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about") // HOC for About