import React from 'react'
import frameimage from "../assets/frame.png"
import Loginform1 from './Loginform1'
import Signupform1 from './Signupform1'
import {FcGoogle} from 'react-icons/fc'

function Templetes({title , desc1 , desc2 , image , formtype , setisloggedin}) {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] px-12 py-12 mx-auto gap-x-12 gap-y-0'>

    <div className='w-11/12  max-w-[450px] '>

        <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>

        <p className='text-[1.175rem] leading-[1.675rem] mt-4'>
            <span className='text-gray-400'>{desc1}</span><br></br>
            <span className='text-blue-400 italic'>{desc2}</span>
        </p>

        {formtype === "signup" ?
        (<Signupform1 setisloggedin={setisloggedin}/>) :
        (<Loginform1 setisloggedin={setisloggedin}/>)}

        <div className='flex w-full items-center my-4 gap-x-2'>
            <div className=' w-full h-[2px] bg-slate-700'></div>
            <p className='text-slate-400 font-medium leading-[1.375rem]'>OR</p>
            <div className=' w-full h-[2px] bg-slate-700'></div>
        </div>

        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-gray-400 border border-b-gray-400 px-[12px] py-[8px] gap-x-2 mt-6'>
        <FcGoogle/>
            <p>Sign up with Google</p>
        </button>
      
    </div>

    <div className='relative w-11/12 max-w-[450px] h-[400]'>

        <img className='student-image' src={frameimage} alt="Pattern" width={558} height={504} loading='lazy'/>
        <img src={image} alt="Students" width={558} height={504} loading='lazy' className='absolute -top-4 right-4'/>

    </div>

    </div>
  )
}

export default Templetes
