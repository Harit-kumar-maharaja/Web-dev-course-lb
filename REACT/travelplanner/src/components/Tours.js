import React from 'react'
import Card from './Card'

function Tours({tours , removetour} ) {
    
  return (
    <div className='container'>
        <div className='title'>
      <h2>Plan With Harit</h2>
      </div>

      <div className='cards'>
            {
                tours.map((tour) => {
                    return <Card {...tour} key={tour.id} removetour = {removetour}></Card>
                })
            }
      </div>
    </div>
  )
}

export default Tours
