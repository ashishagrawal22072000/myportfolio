import React from 'react'
import {motion} from 'framer-motion';
import { aboutLine1, aboutLine2, homeMotion1, reverseSlideMotion } from '../../motion';
import './contact.css'
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai';
import {BsGlobeAmericas} from 'react-icons/bs'
export default function Contact() {
  return (
    <motion.section className="contact" initial={reverseSlideMotion.initial} animate={reverseSlideMotion.final} transition={{type : "spring", duration : 1}}>
      <motion.div className="page_heading" initial={homeMotion1.initial} animate={homeMotion1.final} transition={{type : "spring", duration : .5}}>
        <h1>Contact Me</h1>
        <motion.div className="line1" initial={aboutLine1.initial} animate={aboutLine1.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
        <motion.div className="line2" initial={aboutLine2.initial} animate={aboutLine2.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
      </motion.div>
      <br />
      <div className="contact_container1">
        <h3>Have You Any Question ?</h3>
        <div className="contact_details">
          <div>
            <AiOutlinePhone className="icon" />
            <p>+91 9548398030</p>
          </div>
          <div>
            <AiOutlineMail className="icon" />
            <p>ashishmathura1234@gmail.com</p>
          </div>
          <div>
            <BsGlobeAmericas className="icon" />
            <p>+91 9548398030</p>
          </div>
        </div>
      </div>
      <br />
      <div className='contact_container2'>
        <h3>SEND ME AN EMAIL</h3>
        <form>
          <div>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div>
            <input type="text" placeholder="Subject" />
          </div>
          <div>
            <textarea placeholder="Message" rows={10}></textarea>
          </div>
          <div className="button_container">
            <button className="btn">Send Mail</button>
          </div>
        </form>
        </div>
    </motion.section>
  )
}
