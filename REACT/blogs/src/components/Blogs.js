import React, { useContext } from 'react'
import { AppContext1 } from '../context/AppContext1'
import Spinner from './Spinner'

function Blogs() {

  //consuming data
  const {loading , posts} = useContext(AppContext1);

  return (
    <div className='w-11/12  max-w-[650px] py-9 flex flex-col gap-y-8 mt-[70px] mb-[70px] justify-center items-center '>
      {
        loading ? (<Spinner/>) : (
          posts.length === 0 ? (<div><p>No post found</p></div>) : (
            posts.map((posts) => (
              <div key = {posts.id}>
                <p className='text-lg font-bold'>{posts.title}</p>
                <p className='text-[14px] mt-[3px]'>
                  By <span className='italic'>{posts.author}</span> on <span className='underline font-bold '>{posts.category}</span>
                </p>
                <p className='text-[15px] mt-[6px]'> Posted on <span>{posts.date}</span></p>
                <p className='text-[15px] mt-[14px]'>{posts.content}</p>
                <div className='mt-[7px]'>
                  {posts.tags.map((tag , index) => {
                    return <span className=' text-blue-600 underline font-bold text-[14px] ' key={index}>{`  #${tag}`}</span>
                  })}
                </div>
              </div>
            ))
          )
        )
      }
    </div>
  )
}

export default Blogs
