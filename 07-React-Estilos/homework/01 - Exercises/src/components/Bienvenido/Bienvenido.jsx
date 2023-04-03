import React from 'react'
import Botones from '../Botones/Botones.jsx'
import htmlImg from '../../assets/html.png'
import cssImg from '../../assets/css.svg'
import javascriptImg from '../../assets/javascript.png'
import reactImg from '../../assets/react.png'
import redux from '../../assets/redux.png'
import style from './Bienvenido.module.css'

const studentName = 'Alex Castillo'
const techSkills = [{ tech: 'Html', image: htmlImg }, { tech: 'Css', image: cssImg }, { tech: 'JavaScript', image: javascriptImg }, { tech: 'React', image: reactImg }, { tech: 'Redux', image: redux }]
const alerts = { m1: 'Aprobado', m2: 'En curso' }
const h1Style = { color: 'red' }
export default function Bienvenido () {
  return (
    <div className={style.divBienvenido}>
      <h1 className={style.title} style={h1Style}>soy Henry!</h1>
      <h3 className={style.subtitle}>{studentName}</h3>
      <ul className={style.unorderedList}>
        {techSkills.map(skill => (
          <li key={skill} className={style.listItem}>{skill.tech}<img src={skill.image} alt={skill.tech}/></li>
        ))}
      </ul>
      <Botones alerts={alerts} />
    </div>
  )
}

export { studentName, techSkills, alerts }
