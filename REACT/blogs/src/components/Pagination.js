import React, { useContext } from 'react'
import { AppContext1 } from '../context/AppContext1'

function Pagination() {

  const {page , handlepagechange , totalpages} = useContext(AppContext1);

  return (
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white' >
    <div className='flex justify-between w-11/12 max-w-[650px] py-2'>
      <div className='flex gap-x-2'>
      {page > 1 &&
        (<button className='rounded-md border-2 border-slate-400 px-4 py-1' onClick={() => handlepagechange(page-1)}> Previous</button>)
      }
      {page < totalpages &&
        (<button className='rounded-md border-2 border-slate-400 px-4 py-1' onClick={() => handlepagechange(page+1)} >Next</button>)
      }
      </div>
      <p className=' font-bold text-s'>
        Page {page} of {totalpages}
      </p>
    </div>
    </div>
  )
}

export default Pagination
