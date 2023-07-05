import React from "react";
import "./about.css";
import {motion} from 'framer-motion';
import { aboutLine1, aboutLine2, buttonMotion, homeMotion1, slideMotion } from "../../motion";
import Skillcard from "../../components/skillCard/skillcard";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const hireMe = ()=>{
    navigate("/contact");
  }
  return (
    <motion.section className="about" initial={slideMotion.initial} animate={slideMotion.final} transition={{type : "spring", duration : 1}}>
      <div className="about_container">

      <motion.div className="page_heading" initial={homeMotion1.initial} animate={homeMotion1.final} transition={{type : "spring", duration : .5}}>
        <h1>About Me</h1>
        <motion.div className="line1" initial={aboutLine1.initial} animate={aboutLine1.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
        <motion.div className="line2" initial={aboutLine2.initial} animate={aboutLine2.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
      </motion.div>
      <br />
      <div className="introduction">
        <h3>
          I'm Ashish and{" "}
          <span className="profile_status">Full Stack Web Developer</span>
        </h3>
        <p>
          Welcome to my portfolio! I'm Ashish Agrawal, a Full Stack Web
          Developer specializing in the MERN stack. With a passion for building
          dynamic and immersive web applications, I thrive on transforming
          innovative ideas into functional and visually appealing digital
          experiences.
        </p>
        <br />
        <p>
          Throughout my career, I have honed my skills in MongoDB, Express.js,
          React, and Node.js to deliver seamless end-to-end solutions. By
          combining my expertise in both front-end and back-end development, I
          create robust and scalable applications that meet the unique needs of
          clients and users alike.
        </p>
        <br />
        <p>
          I have a solid foundation in front-end technologies such as HTML, CSS,
          and JavaScript, and I leverage the power of React to craft intuitive
          user interfaces that drive engagement and enhance the overall user
          experience. On the back-end, I rely on the flexibility and efficiency
          of Node.js and Express.js to build robust APIs and handle complex
          server-side logic. MongoDB serves as my go-to database solution,
          allowing for flexible data modeling and seamless integration with the
          rest of the MERN stack.
        </p>
        <br />
        <div className="btn_container">
          <motion.button  className="btn" initial={buttonMotion.initial} animate={buttonMotion.final} transition={{duration : 1}}>Download CV</motion.button>
          <motion.button  className="btn" initial={buttonMotion.initial} animate={buttonMotion.final} transition={{duration : 1}} onClick={hireMe}>Hire Me</motion.button>
        </div>
      </div>
      </div>
      <br />
      <br />
      <div className="skill_container">
        <div className="page_heading">
          <h1>Skills</h1>
          <motion.div className="line1" initial={aboutLine1.initial} animate={aboutLine1.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
        <motion.div className="line2" initial={aboutLine2.initial} animate={aboutLine2.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
       </div>
        <br />
        <div className="skill_box">
          <Skillcard skill="HTML" percent={400} />
          <Skillcard skill="CSS" percent={360} />
          <Skillcard skill="JS" percent={390} />
          <Skillcard skill="React.js" percent={410} />
          <Skillcard skill="Node.js" percent={370} />
          <Skillcard skill="Next.js" percent={350} />
          <Skillcard skill="MongoDB" percent={360} />
        </div>
      </div>

      <br />

      <div className="education_container">
        <div className="education_box">
          <div className="page_heading">
            <h1>Education</h1>
            <motion.div className="line1" initial={aboutLine1.initial} animate={aboutLine1.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
        <motion.div className="line2" initial={aboutLine2.initial} animate={aboutLine2.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
      </div>
          <div className="education">
            <div className="edu_box">
              <div>
              <h3>Bachlor of technology(B.Tech.)</h3>
              <p>GLA University</p>
              <p>2018-2022</p>
              <p>78%</p>
              </div>
            </div>

            <div className="edu_box">
              <div>
              <h3>12th(CBSE)</h3>
              <p>Shri Ji Baba</p>
              <p>2016-2018</p>
              <p>78%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="experience_box">
          <div className="page_heading">
            <h1>Experience</h1>
            <motion.div className="line1" initial={aboutLine1.initial} animate={aboutLine1.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
        <motion.div className="line2" initial={aboutLine2.initial} animate={aboutLine2.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
      </div>
          <div className="experience">
            <div className="exp_box">
              <div>
              <h3>Associate Software Developer</h3>
              <p>Vinove Software & Service</p>
              <p>2022-Till Present</p>
              <p>1+ year experience</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </motion.section>
  );
}
