import React from 'react'
import user_image from  '../../assets/images/user.jpeg';
import './home.css';
import {motion} from 'framer-motion';
import { homeMotion1, homeMotion2, reverseSlideMotion } from '../../motion';

export default function Home() {
  return (
    <motion.section className='home' initial={reverseSlideMotion.initial} animate={reverseSlideMotion.final} transition={{type : "spring", duration : 1}}>
      <motion.div className="home_container1" initial={homeMotion1.initial} animate={homeMotion1.final} transition={{type : "spring" ,duration: 1}}>
        <h1 className="heading">Hello, my name is <span className="user_name">Ashish</span></h1>
        <h3>I'm a {" "}<span className="profile_status">Full Stack Web Developer</span></h3>
        <p>I'm a Full stack web developer with extensive experience for over 2 <br />years. My expertise is to develop and design and many more...</p>
        <div className="btn_container">
          <button className="btn">Download CV</button>
        </div>
      </motion.div>
      <div className="home_container2">
        <div className="user_image_container">
          <motion.img src={user_image} alt="user_image"  initial={homeMotion2.initial} animate={homeMotion2.final} transition={{type : "spring" ,duration: 1,stiffness: 120}}/>
        </div>
      </div>
    </motion.section>
  )
}
