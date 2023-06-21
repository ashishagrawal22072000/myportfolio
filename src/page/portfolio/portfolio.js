import React from 'react'
import {motion} from 'framer-motion';
import { aboutLine1, aboutLine2, homeMotion1, reverseSlideMotion, slideMotion } from '../../motion';
import './portfolio.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
export default function Portfolio() {
  const projects = useSelector((state)=> state.project)
  return (
    <motion.section  className="portfolio"  initial={slideMotion.initial} animate={slideMotion.final} transition={{type : "spring", duration : 1}}>
      <motion.div className="page_heading" initial={homeMotion1.initial} animate={homeMotion1.final} transition={{type : "spring", duration : .5}}>
        <h1>Portfolio</h1>
        <motion.div className="line1" initial={aboutLine1.initial} animate={aboutLine1.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
        <motion.div className="line2" initial={aboutLine2.initial} animate={aboutLine2.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
      </motion.div>
      <br />

    <div className='portfolio_container'>
      {projects.map((ele)=>{
        return (
          <>
          <div className='portfolio_box'>
          <div className='portfolio_image'>
            <img src={ele.source} alt={ele.name} />
          </div>
          <p className="read_more"><NavLink to={`/portfolio/${ele.id}`}>Read More</NavLink></p>
      </div>

          </>
        )
      })}
     
    </div>

      </motion.section>
  )
}
