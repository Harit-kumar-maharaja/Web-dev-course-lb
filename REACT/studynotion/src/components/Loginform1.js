import React from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

function Loginform1({setisloggedin}) {

    const navigate = useNavigate();
    const [formdata, setformdata] = useState({email:"" , password:""})
    const [showpassword, setshowpassword] = useState(false)

    function submithandler(event){
        event.preventDefault();
        setisloggedin(true);
        toast.success("Logged in")
        navigate("/dashboard")
    }
    
    function changehandler(event){
        setformdata((prevdata) => ({
            ...prevdata,
            [event.target.name] : event.target.value,
        }))
    }

  return (
    <form  onSubmit={submithandler} className='flex flex-col w-full gap-y-4 mt-6'>

        <label className='w-full'>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-red-600'>*</sup>
            </p>
            <input
                required
                type='text'
                value={formdata.email}
                onChange={changehandler}
                placeholder='Enter email id'
                name='email'
                className='bg-gray-800 rounded-[0.85rem] text-white w-full p-[12px]'/>
        </label>
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                Password<sup className='text-red-600'>*</sup>
            </p>
            <input
                required
                type={showpassword ? ("text") : ("password")}
                value={formdata.password}
                onChange={changehandler}
                placeholder='Enter password'
                name='password'
                className='bg-gray-800 rounded-[0.85rem] text-#AFB2BF w-full p-[12px]'/>

            <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setshowpassword((prev) => !prev)}>
                {showpassword?  (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to='#'>
                <p className='text-xs mt-1 text-blue-300 max-w-max ml-auto'>
                    Forgot password
                </p>
            </Link>

        </label>

        <button className= 'mt-5 bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px]'>
            Sign In
        </button>

    </form>
  )}
  
  export default Loginform1
