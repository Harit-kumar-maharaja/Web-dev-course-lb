import React from 'react'


function Filter({filterdata , category , setcategory}) {

    function filterhandler(title){
        
        setcategory(title);
    }
    
  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {
        filterdata.map((data) => {
            return(<button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 }`} key={data.id}
            onClick={() => filterhandler(data.title)}>
                {data.title}
            </button>)
        })
      }
    </div>
  )
}

export default Filter


// ${category === data.title ? "bvg-opacity-60 border-white" : "bg-opacity-40 border-transparent"