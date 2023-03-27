import React from 'react'
import Appartement_Banner from '../components/Appartement_Banner'
import AppartementDescription from '../components/AppartementDescription.jsx'
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