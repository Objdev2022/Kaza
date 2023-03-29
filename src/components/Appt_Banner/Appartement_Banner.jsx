import React, { useState } from 'react'
import "./Appartement_Banner.scss"

function Appartement_Banner(props) {

 const pictures = props.pictures;
 const [currentPicture,setCurrentPicture] = useState(0);

 const getClassName = (i) => {
  if (i === currentPicture) return "show";
  return "";
 };
 const moveToNext = () => {
  setCurrentPicture((currentPicture+1) % pictures.length);

 };

 const moveToPrevious =() => {
  const newCurrentPicture = currentPicture-1;

  if (newCurrentPicture < 0) {

    setCurrentPicture(pictures.length -1);
    return;
  }
  setCurrentPicture((currentPicture - 1));

 };
const arePicturesAvalaible = () => {
     return pictures && pictures.length > 0;

};

 const getCarousselOrImage = ()=> {
  if (!arePicturesAvalaible())
  {
   return <img src = "Banneur_About.jpg" width ={1900}height={223} alt="" className='show'></img>;
  }
  return  pictures.map((pic,i) => 
    (<img key={pic} src={pic} alt="" className={getClassName(i)}></img>
    ));
  };


  return (
    <div className='image_banner'>
        
        <div className='image_container'>
          {getCarousselOrImage()}
        </div>
        {(arePicturesAvalaible() && pictures.length > 1)  && (
      <>
        <button className='btn btn-next' onClick={moveToNext}>
        <i className="fa-sharp fa-solid fa-chevron-right"></i>
        </button>
        <span className='slide-compteur'>
          {currentPicture+1}/{pictures.length} 
        </span>
        <button className='btn btn-previous' onClick={moveToPrevious}>
        <i className="fa-sharp fa-solid fa-chevron-left"></i>
        </button>
        
      </>
      )}
    

    </div>
  )
 
}

export default Appartement_Banner