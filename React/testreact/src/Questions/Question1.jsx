import { useState } from "react";

const Xyz=()=>{
  const [todos,setTodos]=useState([])
  const [data , newData]=useState('')

  const handleChange=(event)=>{
    newData(event.target.value);
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    setTodos([...todos,data]);
    newData('')
  }
  return(
    <div>
    
    <form onSubmit={handleSubmit}>
      <br/>
      <input type='text' name ='text'  onChange={handleChange} value={data}/><br/> 
      <input type='submit' value ='add todo'/><br/>
      {todos.map((todo,i)=>(
      <div key={i}>{todo}

      </div>))}
      
      </form>
      </div>
  )

}

export default Xyz
