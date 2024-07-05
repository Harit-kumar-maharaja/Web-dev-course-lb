import React from 'react'
import {useNavigate, Navigate } from 'react-router-dom'

function About() {

  const navigate = useNavigate();

  function clickhandler(){
    navigate("/home");
  }

  return (
    <div>

    <div>
      This is about page
    </div>

    <button onClick={clickhandler}>MOVE TO HOME PAGE</button>
    </div>
  )
}

export default About
