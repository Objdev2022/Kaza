import React from 'react'
import './Main.scss'
/* props = the children*/
function Main(props) {
    const children = props.children
  return (
    <div className='main_conteneur'>{children}</div>
  )
}

export default Main