import React from 'react'
import "./header.css"
import {AiOutlineHome, AiOutlineUser,AiOutlineBars } from 'react-icons/ai';
import {BsBriefcase, BsLink} from "react-icons/bs";
import {  NavLink } from 'react-router-dom'
import {motion} from 'framer-motion'
import { headerMotion } from '../../motion';
import user from '../../assets/images/user.jpeg';
export default function Header() {
  return (
    <motion.div initial={headerMotion.initial} animate={headerMotion.final} transition={{type : "spring" ,duration: .5}}>
      <header>
        <div className="logo">
          <img src={user} />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={(props) => props.isActive ? 'link_active' : ''}><AiOutlineHome className="icons" />
               <p className="nav_link">Home</p>
               </NavLink>
              </li><li>
              <NavLink to="/about" className={(props) => props.isActive ? 'link_active' : ''}><AiOutlineUser className="icons" /> 
              <p className="nav_link">About</p>
              </NavLink>
              </li><li>
              <NavLink to="/service" className={(props) => props.isActive ? 'link_active' : ''}><AiOutlineBars className="icons" />
               <p className="nav_link">Service</p>
               </NavLink>
              </li><li>
              <NavLink to="/portfolio" className={(props) => props.isActive ? 'link_active' : ''}><BsBriefcase className="icons" /> 
              <p className="nav_link">Portfolio</p>
              </NavLink>
              </li><li>
              <NavLink to="/contact" className={(props) => props.isActive ? 'link_active' : ''}><BsLink className="icons" />
               <p className="nav_link">Contact</p>
               </NavLink>

            </li>
          </ul>
        </nav>

        <div className="footer">
            <p>Copyright<sup>&copy;</sup>  @{new Date().getFullYear()} </p>
        </div>
      </header>
    </motion.div>
  )
}
