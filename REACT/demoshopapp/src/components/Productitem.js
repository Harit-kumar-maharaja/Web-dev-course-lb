import React, { useState } from 'react'

import Productdate from './Productdate'
import Card from './Card'
import './Productitem.css';

function Productitem(props) {

    const [title , settitle] = useState(props.title);

 function clickhandller(){
    settitle("Popcorn")
 }

  return (
    
    <Card className= 'product-item'>
        <Productdate  date = {props.date}/>
        <div className='product-item_description'>
            <h2>
                {title};
            </h2>
        </div>
        <button onClick={clickhandller}> Click Me !</button>
    </Card>

  )
}

export default Productitem
