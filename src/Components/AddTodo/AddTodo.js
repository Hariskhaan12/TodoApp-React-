import React,{useState,useEffect} from 'react'
import Todos from '../Todos/Todos'
import './AddTodo.css'

function AddTodo(props) {
  const [Title, SetTitle] = useState("");
  let initialTodo;
  if (localStorage.getItem("Todos") === null) {
    initialTodo = [];
  } else {
    initialTodo = JSON.parse(localStorage.getItem("Todos"));
  }

  // function to remove a todo
  let deleteTodo = (todo) => {
    SetTodoItem(
      TodoItem.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("Todos", JSON.stringify(TodoItem));
  };

  // Funtion to add a todo
  let AddTodo = () => {
    if(Title!='')
    {
      let sno = TodoItem.length + 1;
      const newtodo = {
        sno: sno,
        title: Title,
      };
      SetTodoItem([...TodoItem, newtodo]);
      SetTitle("");
    }
    else{
      alert("You Cant enter the Empty Task")
    }
  };

  // USE STATE WHERE ALL TODOS ARE ADDED AS OBJECT
  const [TodoItem, SetTodoItem] = useState(initialTodo);
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(TodoItem));
  }, [TodoItem]);

  return (
    <div className="Main">
      <h2 className="heading">{props.title}</h2>
      <div className="TodoSection">
        <input
          type="text"
          value={Title}
          onChange={(e) => {
            SetTitle(e.target.value);
          }}
          placeholder="Enter Your Task here"
        />
        <button className="AddTodo" onClick={AddTodo}>
          Add
        </button>
        <Todos todo={TodoItem} Delete={deleteTodo} />
      </div>
    </div>
  );
}

export default AddTodo