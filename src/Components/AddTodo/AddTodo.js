import React,{useState,useEffect} from 'react'
import Todos from '../Todos/Todos'
import './AddTodo.css'


function AddTodo(props) {
  const[hide,Sethide]=useState(false);
  const [Title, SetTitle] = useState("");
  let initialTodo;
  if (localStorage.getItem("Todos") === null) {
    initialTodo = [];
  } else {
    initialTodo = JSON.parse(localStorage.getItem("Todos"));
  }

  // USE STATE WHERE ALL TODOS ARE ADDED AS OBJECT
  const [TodoItem, SetTodoItem] = useState(initialTodo);


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
      alert("You Cant enter the Empty Task or the task already added")
    }
  };
  // save todo
  let SaveTodo=()=>{
    Sethide(!hide)
    let NewValue = document.getElementsByClassName("ab")[0].value;
    //  console.log(NewValue);
    let prevSno=localStorage.getItem('Sno')
    TodoItem.map((val)=>{
      if(val.sno==prevSno)
      {
        // flag=true;
        val.title=NewValue
        SetTodoItem([...TodoItem]);
      }
  })
    SetTitle("")
  
  // ... is req becasue react doest rendered  if the value just change of object/ array  so object ref has to 
  // be changed in order to react detect changes and then it re render.
}



  useEffect(() => {
    console.log('use effect change occur');
    localStorage.setItem("Todos", JSON.stringify(TodoItem));
  },[TodoItem]);




  return (
    <div className="Main">
      <h2 className="heading">{props.title}</h2>
      <div className="TodoSection">
        <input
          type="text"
          value={Title}
          className='ab'
          onChange={(e) => {
            SetTitle(e.target.value);
          }}
          placeholder="Enter Your Task here"
        />
        <button className={`AddTodo ${hide ? "AddTodo" :""}` } onClick={AddTodo}>
          Add
        </button>
        <button className={`SaveTodo ${hide ? "hide":""}`}onClick={SaveTodo}  >
          save
        </button>
        {console.log(hide)}
        <Todos todo={TodoItem} Delete={deleteTodo} 
        Add={document.getElementsByClassName('AddTodo')}
        Save={document.getElementsByClassName('SaveTodo')}
        Input={document.getElementsByClassName('ab')}/>
      </div>
    </div>
  );
}

export default AddTodo