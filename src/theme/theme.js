import React, { useState } from 'react'
import {BsFillGearFill,BsFillMoonFill,BsFillSunFill} from 'react-icons/bs';
import './theme.css'
export default function Theme() {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const [open_color_container, set_open_color_container] = useState(false);

    const handleTheme = (mode) =>{
        if(mode == 'dark'){
            document.body.classList.add("dark");
        }else{
            document.body.classList.remove("dark");
        }
        setTheme(mode);
            localStorage.setItem("theme",mode)
    }
    const setColorTheme = (color) =>{
        document.documentElement.style.setProperty('--skin-color', color);
    }
    const handleColorContainer = () =>{
        if(open_color_container) set_open_color_container(false);
        else set_open_color_container(true)
    }
  return (
    <div className='theme_container'>
        <div className="theme_btn">
            <BsFillGearFill className="theme_icon" onClick={handleColorContainer} />
            <div className="dark_theme">
        {theme == 'light' ? <div className='mode'><BsFillMoonFill className="theme_icon" onClick={() => handleTheme('dark')} /></div> : <div className='mode'><BsFillSunFill className="theme_icon" onClick={() => handleTheme('light')} /></div>}
    </div>
    </div>

        {open_color_container && <>
        <div className="multi_theme_container">
            <h5>Choose Theme</h5>
            <div className="select_theme">
          <div className="red_theme" onClick={() => setColorTheme('#ec1839')}></div>
          <div className="yellow_theme" onClick={() => setColorTheme('#F2BE22')}></div>
          <div className="green_theme" onClick={() => setColorTheme('#8EAC50')}></div>
          <div className="blue_theme" onClick={() => setColorTheme('#46458C')}></div>
          <div className="pink_theme" onClick={() => setColorTheme('#FFBDF7')}></div>
        </div>
            </div>
        </>}
    </div>
  )
}
