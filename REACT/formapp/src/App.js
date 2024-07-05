import './App.css';
import {useState} from 'react'

function App() {

  const [formdata, setformdata] = useState({firstname: "" , lastname:"" , email:"" , comments: "" , isvisible:true , mode:"Online-mode" , favcar:""});

  console.log(formdata);

  function changehandler(event){
    setformdata(prevformdata => {
      return{
      ...prevformdata,
      [event.target.name] : event.target.value
      }
    })
  }

  function submithandler(event){
    event.preventDefault();

    console.log(formdata);
  }
  

  return (
    <div>
      <form onSubmit={submithandler}>
        <input type="text" placeholder = "firstname" name="firstname" onChange = {changehandler}value={formdata.firstname} />
        <br></br>
        <br></br>
        <input type="text" placeholder = "lastname" name="lastname" onChange = {changehandler} value={formdata.lastname}/> 
        <br></br>
        <br></br>
        <input type="text" placeholder = "Email id" name="email" onChange = {changehandler} value={formdata.email}/> 
        <br></br>
        <br></br>
        <textarea placeholder='enter your comments here' onChange={changehandler} name='comments' value={formdata.comments}/>
        <br></br>
        <br></br>

        <fieldset>
        <input type="checkbox" name="isvisible" onChange = {changehandler} checked={formdata.isvisible}/> 
        <label>Am i Visible</label>
        <br></br>
        <br></br> 

        <input 
          type='radio'
          onChange={changehandler}
          name='mode'
          value="offline-mode"
          checked={formdata.mode === "Offline-mode"}/ >
        </fieldset>

        <br></br>
        <br></br>

        <select
          name='favcar'
          id='favcar'
          value={formdata.favcar}
          onChange={changehandler}>

            <option value="Scorpio">Scarpio</option>
            <option value="Fartuner">Fartuner</option>
            <option value="ENDEVOUR">ENDEVOUR</option>
            <option value="Rangeravar">Rangeravar</option>
            <option value="Harrier">Harrier</option>

        </select>

        <br></br><br></br>

        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
