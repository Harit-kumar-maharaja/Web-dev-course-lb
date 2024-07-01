import React, { useState } from 'react'

function Productform(props) {

    const [newtitle , settitle] = useState("");
    const [newdate , setdate] = useState("");

    function titlechangehandler(event){
        settitle(event.target.value);
    }
    function datechangehandler(event){
        setdate(event.target.value);
    }

    function submithandler(event){
        event.preventDefault();

        const productdata  ={
            title:newtitle,
            date:newdate,
        }

        console.log(productdata);

        setdate('')
        settitle('');
    }

  return (
    <form onSubmit={submithandler}>
    <div>
        <label>Title</label>
        <input value={newtitle} onChange={titlechangehandler} type='text'></input>
    </div>
    <div>
        <label>Date</label>
        <input type='date' value={newdate} min='2023-01-01' onChange={datechangehandler} max='2023-12-12'></input>
    </div>
    <div>
        <button type='submit'>Add Product</button>
    </div>
    </form>
  )
}

export default Productform
