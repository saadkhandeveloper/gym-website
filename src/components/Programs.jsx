import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { programs } from '../assets/data';
import Card from '../UI/Card';
import {GiCutDiamond} from 'react-icons/gi'
import {BsFillCaretRightFill} from 'react-icons/bs'



const Programs = () => {
  return (
  <section className="programs">
    <div className="container programs__container">
   <SectionHeader Icon={<GiCutDiamond/>} title="Programs" />
  
    <div className="program__wrapper">
{
    programs.map(({id,icon,title,info,path})=> {
        return(
           <Card className="programs__program" key={id}>
<span>{icon}</span>
<h4>{title}</h4>
<small>{info}</small>
<Link to={path} className='btn sm'>Learn More <BsFillCaretRightFill /></Link>
           </Card>
        )
    })
}        
    </div>
    </div>
  </section>
  )
}

export default Programs
