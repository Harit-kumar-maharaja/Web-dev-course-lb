import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Signupform1({setisloggedin}) {
    const [formdata, setformdata] = useState({ firstname: "", lastname: "", email: "", password: "", confirmpassword: "" })

    const [showpassword, setshowpassword] = useState(false)
    const [showconfirmpassword, setshowconfirmpassword] = useState(false)
    const [accounttype, setaccounttype] = useState("student")
    const navigate =useNavigate();

    function changehandler(event) {
        setformdata((prevdata) => ({
            ...prevdata,
            [event.target.name]: event.target.value,
        }))
    }

    function submithandler(event){
        event.preventDefault();
        if(formdata.password != formdata.confirmpassword){
            toast.error("Password do not matched");
            return
        }

        setisloggedin(true);
        toast.success("Account created")

        navigate("/dashboard")
    }

    return (
        <div >
            {/* student instructor tab */}
            <div className='flex bg-gray-800 p-1 gap-z-1 my-6 rounded-full max-w-max'>
                <button onClick={() => setaccounttype("student")}
                    className={`${accounttype==="student" ? "bg-gray-900 text-white" : "bg-transparent text-white"} py-2 px-5 rounded-full transition-all duration-200`}>
                    Student
                </button>
                <button onClick={() => setaccounttype("instructor")} 
                    className={`${accounttype==="instructor" ? "bg-gray-900 text-white" : "bg-transparent text-white"} py-2 px-5 rounded-full transition-all duration-200`}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submithandler}>

                {/* firstname and lastname */}
                <div className='flex justify-between mt-[20px]'>
                    <label>
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>First name <sup className='text-red-600'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstname'
                            onChange={changehandler}
                            placeholder='Enter first name'
                            value={formdata.firstname}
                            className='bg-gray-800 rounded-[0.85rem] text-white w-full p-[12px]' />
                    </label>
                    <label>
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Last name <sup className='text-red-600'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='lastname'
                            onChange={changehandler}
                            placeholder='Enter Last name'
                            value={formdata.lastname}
                            className='bg-gray-800 rounded-[0.85rem] text-white w-full p-[12px]' />
                    </label>
                </div>

                {/* email address */}
                <div className='mt-[20px]'>
                <label className='w-full '>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email address <sup className='text-red-600'>*</sup></p>
                    <input
                        required
                        type='text'
                        name='email'
                        onChange={changehandler}
                        placeholder='Enter Email address'
                        value={formdata.email}
                        className='bg-gray-800 rounded-[0.85rem] text-white w-full p-[12px]' />
                </label>
                </div>

                {/* create password and confirmpassword */}
                <div className='flex justify-between mt-[20px]'>
                    <label className='relative'>
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Create password <sup className='text-red-600'>*</sup></p>
                        <input
                            required
                            type={showpassword ? ("text") : ("password")}
                            name='password'
                            onChange={changehandler}
                            placeholder='Enter password'
                            value={formdata.password}
                            className='bg-gray-800 rounded-[0.85rem] text-white w-full p-[12px]' />
                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setshowpassword((prev) => !prev)}>
                            {showpassword ? (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>
                    <label className='relative'>
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-red-600'>*</sup></p>
                        <input
                            required
                            type={showconfirmpassword ? ("text") : ("password")}
                            name='confirmpassword'
                            onChange={changehandler}
                            placeholder='Confirm password'
                            value={formdata.confirmpassword}
                            className='bg-gray-800 rounded-[0.85rem] text-white w-full p-[12px]' />
                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setshowconfirmpassword((prev) => !prev)}>
                            {showconfirmpassword ? (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>

                </div>

                <button className= 'w-full mt-[20px] bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px]'>
                    Create account
                </button>

            </form>

        </div>
    )
}

export default Signupform1
