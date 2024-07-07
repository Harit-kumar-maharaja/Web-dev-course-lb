import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Privaterouter( {isloggedin , children} ) {

    const navigate = useNavigate

  if(isloggedin){
    return children;
  }
  else{
    return <Navigate to="/login"/>;
  }
}

export default Privaterouter
