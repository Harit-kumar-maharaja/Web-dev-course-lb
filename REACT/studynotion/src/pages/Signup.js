import React from 'react'
import Templetes from '../components/Templetes'
import signupimg from '../assets/signup.jpg'

function Signup({setisloggedin}) {
  return (
    <Templetes
      title="Join the millions learning to code with study notion"
      desc1 = "Build skills for today , tommorow and beyonnd"
      desc2 = "Education to future-proof your carrer"
      image={signupimg}
      formtype="signup"
      setisloggedin={setisloggedin}
    />
  )
}

export default Signup
