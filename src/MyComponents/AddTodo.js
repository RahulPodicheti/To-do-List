import React, { useState } from 'react'

const AddTodo = (props) => {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Desc Cannot be blank ");
        }else{
        props.addTodo(title,desc)
        setTitle("");
        setDesc("");
        }
    }
  return (
    <div  
   className='container' >
      <form onSubmit={submit} >
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Email address</label>
    <input type="text" value={title} className="form-control" id="title" onChange={(e)=>{setTitle(e.target.value)}} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Password</label>
    <input type="text" value={desc} className="form-control" onChange={(e)=>{setDesc(e.target.value)}} id="desc"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo
