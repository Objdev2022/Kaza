import React from 'react'
import {Link } from 'react-router-dom';
import './AppartementCard.scss';

function AppartementCard(props) {
return (
    <div className='appartement'>
      <Link 
      to = "/flat" state={{appartment_id :props.id}}>
       <img src ={props.imgUrl} alt=""/>
       <div className='appartement_title'>{props.title}</div>
      </Link>
    </div>
  )
}

export default AppartementCard