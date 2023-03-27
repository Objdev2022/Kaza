import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export function useAppartment() {
  
  const [flat, Setflat] = useState(null);
  const location = useLocation();
   
  useEffect (() => {
    const abortcontroller = new AbortController();
    
    fetch('db.json',{signal :abortcontroller.signal})

    .then((res) => res.json())
    .then((flats) => {
      const flat = flats.find((flat) =>  
      flat.id === location.state.appartment_id);
      Setflat(flat);
      
      })
    
    .catch(console.error) ;

   return () => {
    
    abortcontroller.abort(); 
    };
  
  }, []);
  
  return flat;
}



 
 


