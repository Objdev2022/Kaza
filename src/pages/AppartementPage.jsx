import AppartementDescription from '../components/Appt_Description/AppartementDescription';
import "./AppartementPage.scss";
//import Appartement_Banner from '../components/Appartement_Banner';
import Appartement_Banner from '../components/Appt_Banner/Appartement_Banner'

import Appartement_Header from '../components/Appt_Header/Appartement_Header.jsx';
import { useAppartment } from '../hooks/useAppartment.jsx';

function AppartementPage() {
    
  const flat = useAppartment();
  
  if (flat == null) return <div>Loading..... </div>;
      
  return (
         
    <div className='appartement-page'>
     
        <Appartement_Banner pictures ={flat.pictures}/>
        <Appartement_Header flat={flat}/> 
  
     <div className='appartement_description_area'>
        <AppartementDescription title ="Description" content={flat.description}/>
        <AppartementDescription title ="Equipements" content={
          flat.equipments.map((eq,i) => <li key ={i}>{eq}</li>)
        }/>
     </div>
       
    </div>
  )
     
}

export default AppartementPage