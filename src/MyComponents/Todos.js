import React from 'react'
import TodoItem from './TodoItem'
export default function Todos(props) {
  let myStyle = {
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className='container my-3' style={myStyle} >
      <h4 className='my-3' >{props.title}</h4>
      {props.todos.length===0? "No Todos to Display" : 
      props.todos.map((todo)=>{
        return (<TodoItem todo={todo} key={todo.sno} ondelete={props.ondelete} />)
      })
    }
      </div>
  )
}

