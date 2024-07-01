import React from 'react'
import {FcLike , FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify'; 

function Card(props) {

    let course = props.course;
    let likedcourses = props.likedcourses;
    let setlikedcourses = props.setlikedcourses;

    function clickhandler(){
        //logic
        if(likedcourses.includes(course.id)){
            //phle se like hua pda tha
            setlikedcourses((prev) => prev.filter((cid) => (cid) !== course.id));
            toast.warning("Like Removed")
        }
        else{
            //phle se like nhi hai ye course
            //insert krna hai ye course liked courses me
            if(likedcourses.length === 0){
                setlikedcourses([course.id])
            }
            else{
                //non empty phle se
                setlikedcourses((prev) => [...prev , course.id ])
            }
            toast.success("Liked Succesfully")
        }
    }

  return (
    <div className='w-[300px] bg-slate-700 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src = {course.image.url}></img>

        <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-3 bottom-4 grid place-items-center '>
        <button onClick={clickhandler}>
            {
            !likedcourses.includes(course.id) ? (<FcLikePlaceholder fontSize = "1.5rem"/>) : (<FcLike fontSize = "1.5rem"/>)
            }
        </button>
      </div>
      
      </div>

      
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='text-white mt-2'>{
                course.description.length > 100 ? (course.description.substr(0,100))  + "..." : (course.description)
            }</p>
      </div>
    </div>
  )
}

export default Card
