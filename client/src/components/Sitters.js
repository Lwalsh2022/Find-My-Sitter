import React from 'react'
import Nav from './Nav'
import { useLocation } from 'react-router-dom';

const Sitters = (props) => {
  
  const location = useLocation();

  console.log("current posts data", props.location)
  return (
    <>
      <div id='header'></div>
      <Nav />
      This is the sitters page
    
    </>
  )
}

export default Sitters;