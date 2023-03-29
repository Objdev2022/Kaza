import React, { useEffect, useState } from 'react'
import './AppartementGrid.scss';

import AppartementCard from '../Appt_Card/AppartementCard';


/* récupération des infos à partir du fichier db.json*/

/* ... : resth opérateur*/


function AppartementGrid() {
  const [appartments, setAppartements] = useState([]);

  //useEffect(fechAppartments,[]);
  /* s'excute au chargement du composant*/
  

  useEffect (() => {
    
    const abortcontroller = new AbortController();
    fetch('db.json', {signal :abortcontroller.signal})
    .then((res) => res.json())
    .then((res) => setAppartements(res))
    .catch(console.error) ;

    return () =>{
     
      abortcontroller.abort();  //clean-up , se fait avant le fecth en mode strictmode
    }
  },[])

  return (
    <div className='grid'>
                   
       {/*{appartments.map ((appartment,i) => (<AppartementCard title ={appartment.title} imgUrl ={appartment.cover} id ={appartment.id} key ={i}/>))}
       */}
       {appartments.map ((appartment) => (<AppartementCard title ={appartment.title} imgUrl ={appartment.cover} id ={appartment.id} key ={appartment.id}/>))}
         
    </div>
  )
}

export default AppartementGrid