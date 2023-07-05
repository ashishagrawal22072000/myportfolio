import React from 'react'
import {motion} from 'framer-motion';
import { aboutLine1, aboutLine2, homeMotion1, reverseSlideMotion, slideMotion } from '../../motion';
import './service.css';
import {AiOutlineApi, AiOutlineCode,AiOutlineDatabase} from 'react-icons/ai';
import {MdOutlineDeveloperMode} from 'react-icons/md'
export default function Service() {
  return (
    <motion.section  className="service"  initial={reverseSlideMotion.initial} animate={reverseSlideMotion.final} transition={{type : "spring", duration : 1}}>
      <motion.div className="page_heading" initial={homeMotion1.initial} animate={homeMotion1.final} transition={{type : "spring", duration : .5}}>
        <h1>Services</h1>
        <motion.div className="line1" initial={aboutLine1.initial} animate={aboutLine1.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
        <motion.div className="line2" initial={aboutLine2.initial} animate={aboutLine2.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
      </motion.div>
      <br />

    <div className='service_container'>
      <div className='service_box'>
        <AiOutlineCode className='icon' />
        <h3>Web Design</h3>
        <p>Visual design focuses on the aesthetics of a website, including layout, color schemes, typography, and graphics. It involves creating a visually appealing and consistent interface that aligns with the brand identity and effectively communicates the website's purpose</p>
      </div>

      <div className="service_box">
        <MdOutlineDeveloperMode className='icon' /> 
        <h3>Web Development</h3>
        <p>handle tasks such as implementing user interfaces, developing server-side functionality, integrating databases, and managing the overall architecture of a web project</p>
      </div>

      <div className="service_box">
        <AiOutlineApi className='icon' />
        <h3>Api Development</h3>
        <p>creating interfaces that allow different software applications to communicate and interact with each other. APIs define the methods and protocols for exchanging data and functionalities between systems, enabling developers to build new applications or integrate existing systems.</p>
      </div>

      <div className="service_box">
        <AiOutlineDatabase className='icon' />
        <h3>Database Management</h3>
        <p>involves the organization, storage, retrieval, and manipulation of data within a database system. Effective database management ensures data integrity, security, and efficient data access.</p>
      </div>
    </div>

      </motion.section>
  )
}
