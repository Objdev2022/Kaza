import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx';
import Main from '../layout//Main/Main.jsx';
import {Link } from 'react-router-dom';
import Footer from '../layout/Footer/Footer.jsx';

import './ErrorPageNotFound.scss';

function ErrorPageNotFound() {
  return (
    <>
    <Navbar/>
    <Main>
        <div className='error-page'>
            <h1>404</h1>
            <h2>Oups ! La Page que vous demandez n'existe pas</h2>
            <Link to="/">Retourner vers la page d'acceuil</Link>
        </div>
    </Main>
    <Footer/>
    
    </>
  )
}

export default ErrorPageNotFound