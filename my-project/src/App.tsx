import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodosPage';
// import { TodoForm } from './components/TodoForm';
// import { TodoList } from './components/TodoList';
// import { ITodo } from './interfaces';

// declare var confirm: (question: string) => boolean

const App: React.FC = () => {
  // const [todos, setTodos] = useState<ITodo[]>([])

  // useEffect(() => {
  //   const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
  //   setTodos(saved)
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos))
  // }, [todos])

  // const addHandler = (title: string) => {
  //   const newTodo: ITodo ={
  //     title: title,
  //     id: Date.now(),
  //     completed: false
  //   }
  //   // setTodos([newTodo, ...todos])
  //   setTodos(prev => [newTodo, ...prev])
  // }

  // const toggleHandler = (id: number) => {
  //   setTodos(prev => prev.map(todo => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //       completed: !todo.completed
  //       }
  //     }
  //     return todo
  //   }))
  // }

  // // const toggleHandler = (id: number) => {
  // //   setTodos(
  // //     todos.map((todo) => {
  // //       if (todo.id === id) {
  // //         todo.completed = !todo.completed;
  // //       }
  // //       return todo;
  // //     })
  // //   );
  // // };

  // const removeHandler = (id: number) => {
  //   const shouldRemove = confirm('Вы уверены, что хотите удалить элемент?')
  //   if( shouldRemove) {
  //     setTodos(prev => prev.filter(todo => todo.id !== id))
  //   }  
  // }

  return (
    <>
      {/* <Navbar />
      <div className="container">
          <TodoForm onAdd={addHandler}/>
          <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
      </div> */}
      <BrowserRouter>
        <Navbar />
        <div className="container">
            <Routes>
              <Route element = {TodosPage} path="/" />
              <Route element = {AboutPage} path="/about" />
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );

}

export default App;
