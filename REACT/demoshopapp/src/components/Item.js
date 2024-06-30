import React from 'react'
import './Item.css'

function Item(props) {

    const itemname = props.name;
  return (
    <p className='para'>
        {itemname}
    </p>
  )
}

export default Item
