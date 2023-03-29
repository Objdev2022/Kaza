import React from 'react'
import './Appartement_Header.scss';

function Appartement_Header(props) {
  
  const flat = props.flat;
  const name = flat.host.name;
  const [firstName, lastName] = name.split(' ');
  
  return (
    <div>
        <div className='appartement_header'>
          <div className='appartement_title'>
            <h1>{flat.title}</h1>
            <h2>{flat.location}</h2>
            <div className='appartement_tags'>
             
             {flat.tags.map((tag) => 
                    (<span key ={tag}>{tag}</span>)
                    
                    )
             }                 
                       
            </div>
              
          </div> 
          <div className='appartement_owner'>
            <div className='appartement_owner_details'>
              <h3>
                <span>{firstName}</span>
                <span>{lastName}</span>
              </h3>
            <div className='appartement_owner_badge'>
              <img src={flat.host.picture}/>
            </div>
            </div>
            {/*span par defaut grisée */}
            <div className='apparatement_owner_stars'>
              
              {[1,2,3,4,5].map((num) =>
               (<span key ={num} className={props.flat.rating >= num ? "on" :""}>★</span>))}
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Appartement_Header