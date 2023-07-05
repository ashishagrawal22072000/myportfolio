import React from 'react'

export default function Skillcard({skill, percent}) {
    console.log(skill, percent)
  return (
    <div className="skill_card">
            <div className="percent">
              <svg>
                <circle cx={70} cy={70} r={70}></circle>
                <circle
                  cx={70}
                  cy={70}
                  r={70}
                  style={{ "--dasharray": `${percent}` }}
                ></circle>
              </svg>
              <h3>{skill}</h3>
            </div>
            </div>
  )
}
