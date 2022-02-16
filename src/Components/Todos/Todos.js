import React, { useState,useEffect } from "react";
import "./Todos.css";
function Todos(props) {
  let click=()=>{
    console.log('click');
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

  return (
    <>
      <div className="main">
        {props.todo.length == 0 ? (
          <p>No todos to display</p>
        ) : (
          props.todo.map((todo) => (
            <>
              <p>{`Task # ${todo.sno}`}</p>
              <div className="container">
                <h5  id={todo.title}>{`${todo.title}`}</h5>
                <span>
                  <input
                    onClick={click}
                    type="checkbox"
                    id="chkbox"
                    value={todo.title}
                  />
                  <label htmlFor="chkbox">Mark as done </label>
                </span>
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
