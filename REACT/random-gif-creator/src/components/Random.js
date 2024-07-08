import React, { useEffect } from 'react'
import { useState } from 'react'

import Spinner from './Spinner'

import Usegif1 from '../hooks/Usegif1';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


function Random() {

    // const [gif, setgif] = useState('')
    // const [loading, setloading] = useState('false')

    // async function fetchdata(){
    //   // const API_KEY = 'GHdhPipY6d9GaOP60YAtaeq91y4slr4Y';
    //   setloading(true)
    //   const url = `https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S`;
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   console.log(data);
    //     const imagesource = data.data.images.downsized_large.url;
    //     setgif(imagesource)
    //   setloading(false)
    // }

    // useEffect(() => {
    //     fetchdata()
    // } , [])

    const {gif , loading , fetchdata} = Usegif1()

    function clickhandler(){
      fetchdata()
    }

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5  mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width={450}/>)
      }
      
      <button className='w-10/12 bg-white opacity-70 text-lg py-2 rounded-lg mb-[20px]' onClick={clickhandler}> Generate </button>
    </div>
  )
}

export default Random
