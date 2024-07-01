import React, { useState } from 'react'
import Card from './Card'


function Cards({courses  , category}) {

    const [likedcourses , setlikedcourses] = useState([]);

    
    function getcourses (){
        if(category === "All"){
        let allcourses = [];
        Object.values(courses).forEach((coursecategory) => {
            coursecategory.forEach((course) => {
                allcourses.push(course);
            })
        })
        return allcourses;
        }
        else{
            //mai sirf specific category ka data pass krunga
            return courses[category] ;
        }
    }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getcourses().map((course) => {
                return <Card course = {course} likedcourses={likedcourses} setlikedcourses={setlikedcourses}/>
            }) 
        }
    </div>
  )
}

export default Cards
