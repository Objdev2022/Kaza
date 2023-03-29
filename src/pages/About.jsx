import React from 'react'
import Appartement_Banner from '../components/Appt_Banner/Appartement_Banner'
import AppartementDescription from '../components/Appt_Description/AppartementDescription.jsx'
import './About.scss'
import { useDescriptionAbout } from '../hooks/useDescriptionAbout'


function About() {

const appartmentdescription = useDescriptionAbout();

  return (
    <>
     <Appartement_Banner/>
     <div className='about_container'>
      
       {appartmentdescription.map((apptDesc) => (<AppartementDescription title ={apptDesc.title} content ={apptDesc.content} id ={apptDesc.id} key ={apptDesc.id}/>))}
       
        </div> 
    </>
    
  )
}

export default About