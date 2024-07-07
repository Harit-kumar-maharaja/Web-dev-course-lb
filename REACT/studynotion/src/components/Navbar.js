import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { toast } from 'react-toastify';

function Navbar({isloggedin , setisloggedin}) {


  return (
    <div className='flex justify-between item-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      
        <Link to="/">
            <img src={logo} alt='Logo' width={160} height={32} loading='lazy'></img>
        </Link>

        <nav>
            <ul className='text-white  flex gap-x-6'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
            </ul>
        </nav>

        {/* login signup logout dashboard */}
        <div className='flex items-center gap-x-4'>
            {!isloggedin && 
                <Link to="/login">
                    <button className='bg-gray-800 text-white py-[4px] px-[8px] rounded-[8px] border border-b-gray-700'>Log in</button>
                </Link>
            }
            {!isloggedin &&
                <Link to="/signup">
                    <button className='bg-gray-800 text-white py-[4px] px-[8px] rounded-[8px] border border-b-gray-700'>Sign up</button>
                </Link>
            }
            {isloggedin &&
                <Link to="/logout">
                    <button className='bg-gray-800 text-white py-[4px] px-[8px] rounded-[8px] border border-b-gray-700' onClick={() => {
                        setisloggedin(false);
                        toast.success("Logged out succesfully")
                    }}>Logout</button>
                </Link>
            }
            {isloggedin &&
                <Link to="/dashboard">
                    <button className='bg-gray-800  text-white py-[4px] px-[8px] rounded-[8px] border border-b-gray-700'>Dashboard</button>
                </Link>
            }
        </div>

    </div>
  )
}

export default Navbar
