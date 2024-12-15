import React from 'react'
export default function TodoItem({todo,ondelete}) {
  return (
    <>
    <div>
      <h4>{todo.title}</h4>
      <h4>{todo.desc}</h4>
      <button className="btn btn-sm btn-danger my-2" onClick={()=>ondelete(todo)} >Delete</button>
    </div>
    <hr />
    </>
  )
}
