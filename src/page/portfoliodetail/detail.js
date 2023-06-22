import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { get_project_by_id } from '../../redux/action'
import { aboutLine1, aboutLine2, homeMotion1, slideMotion } from '../../motion'
import {motion} from 'framer-motion'
import "./detail.css"
import {FaUsers,FaGlobeAfrica} from "react-icons/fa";
import {MdIncompleteCircle} from "react-icons/md"
import {AiOutlineFileDone} from "react-icons/ai";
export default function Detail() {
    const {id} = useParams()
    const [data, setData] = useState()
    const project = useSelector((state) => state.project);
    useEffect(()=>{
        const data = project.find((ele) =>{
            return ele.id == id;
        })
        setData(data)
    },[id])
  return (
    <>
    <motion.section  className="detail"  initial={slideMotion.initial} animate={slideMotion.final} transition={{type : "spring", duration : 1}}>
      <motion.div className="page_heading" initial={homeMotion1.initial} animate={homeMotion1.final} transition={{type : "spring", duration : .5}}>
        <h1>{data?.name}</h1>
        <motion.div className="line1" initial={aboutLine1.initial} animate={aboutLine1.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
        <motion.div className="line2" initial={aboutLine2.initial} animate={aboutLine2.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
      </motion.div>
      <br />

      <div className="detail_container">
        <div className="detail_box">
            <div className="project_image">
                <img src={data?.source} alt={data?.name} />
            </div>
            <br />
            <p>{data?.about}</p>
        </div>
        <br />
        <div className='more_container'>
          <div className='more_box'>
            <FaUsers className='icons' />
            <h3>Team({data?.teammember})</h3>          
          </div>

          <div className='more_box'>
            <NavLink to={data?.link}> <FaGlobeAfrica className='icons' /></NavLink>
            <h3>Website</h3>          
          </div>

          <div className='more_box'>
            {data?.current_status == 'inprogress' ? <MdIncompleteCircle className='icons' /> : <AiOutlineFileDone className='icons' /> }
            <h3>State</h3>          
          </div>
        </div>

        <br />
        <div className="project_role">
        <motion.div className="page_heading" initial={homeMotion1.initial} animate={homeMotion1.final} transition={{type : "spring", duration : .5}}>
        <h1>Role & Responsibility</h1>
        <motion.div className="line1" initial={aboutLine1.initial} animate={aboutLine1.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
        <motion.div className="line2" initial={aboutLine2.initial} animate={aboutLine2.final} transition={{type : "spring", duration : 1, delay : .5}}></motion.div>
      </motion.div>

        <br />
        <ol>
            {data?.role.map((ele) =>{
                return (
                    <>
                    <li>{ele}</li>
                    </>
                )
            })}
        </ol>
        </div>
      </div>
      </motion.section>
    </>
  )
}
