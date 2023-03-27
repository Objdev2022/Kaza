import { useEffect, useState } from 'react';

export function useDescriptionAbout() {

    const [appartmentdescription, setAppartementDescription] = useState([]);

    //useEffect(fechAppartments,[]);
    /* s'excute au chargement du composant*/
    
    useEffect (() => {
      
      const abortcontroller = new AbortController();
      fetch('dbkasa.json', {signal :abortcontroller.signal})
      .then((res) => res.json())
      .then((res) => setAppartementDescription(res))
       
      .catch(console.error) ;
  
      return () =>{
       
        abortcontroller.abort();  //clean-up , se fait avant le fecth en mode strictmode
      }
    },[])
  

  return appartmentdescription;
  
}

