import React from 'react'
import AddTodo from './Components/AddTodo/AddTodo'
import About from './Components/About/About' 
import Header from './Components/Header/Header'
import {Routes, Route} from 'react-router-dom'

import './App.css'
function App() {
  return (
    <div>
      <Header logoText='TodoApp_Haris'/>
    <Routes>
      <Route path='/' element={<AddTodo title='My Todo Application'/>}/>
      <Route path='about' element={<About/>}/>
    </Routes>
    </div>
  )
}

export default App