import React from 'react'
import AddTodo from './Components/AddTodo/AddTodo'
import Header from './Components/Header/Header'
import './App.css'
function App() {
  return (
    <div>
    <Header logoText='TodoApp_Haris'/>
    <AddTodo title='My Todo Application'/>
    
    </div>
  )
}

export default App