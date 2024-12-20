// import logo from './logo.svg';
import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./MyComponents/About";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const ondelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return ( 
    <>
    <BrowserRouter>
    <Header title={"Todos List"} searchBar={true} />        
        <Routes>
          <Route exact path='/' element={<><AddTodo addTodo={addTodo} />
    <Todos todos={todos} ondelete={ondelete} title="Todos List" /></>} >
           </Route>
           <Route exact path="/about" element={<About/>} ></Route>
        </Routes>
        <Footer title="Footer Works" />
      </BrowserRouter>
      {/* render={()=>{
            return(
              <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} ondelete={ondelete} title="Todos List" />
              </>)
          }}  */}
    </>
  );
}

export default App;
