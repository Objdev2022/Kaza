import React, { useState } from 'react'
import "./AppartementDescription.scss";

function AppartementDescription(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);
  
  const showContent = () => {
   
    setIsContentVisible (!isContentVisible);
 
  }

  return (
    <div className="appartement_description">
          <p className='description_header'>
            <span>{props.title}</span>
            <i className="fa-sharp fa-solid fa-chevron-up" onClick ={showContent}></i>
          </p>
          { isContentVisible && <p className='description_content'>
            {props.content} 
          </p>}
    </div>  
  
  )
}

export default AppartementDescription