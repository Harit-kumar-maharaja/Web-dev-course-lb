import React from 'react'
import Templetes from '../components/Templetes'
import loginimg from '../assets/loginfinal.avif'

function Login({setisloggedin}) {
  return (
    <Templetes
      title="Welcome back"
      desc1 = "Build skills for today , tommorow and beyond"
      desc2 = "Education to future-proof your carrer"
      image={loginimg}
      formtype="login"
      setisloggedin={setisloggedin}
    />
  )
}

export default Login
