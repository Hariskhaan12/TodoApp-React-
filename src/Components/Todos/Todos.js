import React, { useState,useEffect } from "react";
import "./Todos.css";
function Todos(props) {

  let click=()=>{
     let d = document.querySelectorAll('input[type="checkbox"]');
     for (const ch of d) {
       if(ch.checked)
       {
         let a=document.getElementById(ch.value);
         a.setAttribute('Class','donetask')
       }
       else{
         let a = document.getElementById(ch.value);
         a.setAttribute("Class", "");
       }
      
     }
    
  }
  let editText=(title,sno)=>{
    // console.log(title,sno)
    //setting value to input field
    props.Input[0].value=title;
    // getting add and save button so we can hide and show respectively
    let Addbtn=props.Add
    let Savebtn=props.Save;
    // if add button is there then hide it and show save button if add button is undefined or not present then no need 
    if(Addbtn[0]!==undefined)
    {
      Addbtn[0].className='HideAdd';
      Savebtn[0].className='ShowSave';
    }
    // so we can have the sno of the todo we want to add. 
    localStorage.setItem("Sno",sno)
  }
  // console.log("this is todojs",props.todo)

  return (
    <>
    {console.log('todo render runs')}
      <div className="main">
        {props.todo.length == 0 ? (
          <p>No todos to display</p>
        ) : (
          props.todo.map((todo) => (
            <>
              <p>{`Task # ${todo.sno}`}</p>
              <div className="container">
                <h5 id={todo.title}>{`${todo.title}`}</h5>
                <span>
                  <input
                    onClick={click}
                    type="checkbox"
                    id="chkbox"
                    value={todo.title}
                  />
                  <label htmlFor="chkbox">Mark as done </label>
                </span>
                <p className="editTodo" onClick={()=>editText(todo.title,todo.sno)}>edit</p>
              </div>
              <button className="del-btn" onClick={() => props.Delete(todo)}>
                Delete
              </button>
              <hr />
            </>
          ))
        )}
      </div>
    </>
  );
}

export default Todos;
