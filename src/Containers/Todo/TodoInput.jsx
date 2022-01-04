import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todo/actions/action";
import styles  from '../style/style.module.css';
import {v4 as uuid} from 'uuid'
function TodoInput() {
  const [todoTitle,setTodoTitle]=useState("");
  let ref=useRef()
//   const [payLoad,setPayload]=useState([]);
let payLoad=[]
  const dispatch=useDispatch()
  console.log(payLoad)
let handleTodoAdd=()=>{
    if(!todoTitle)
   return EmptyInputerrorHandle();     
    payLoad={
        id:uuid(),
        title:todoTitle,
        status:false
    }
    dispatch(addTodo(payLoad))
    setTodoTitle("")
    ref.current.focus()
}
let EmptyInputerrorHandle=()=>{
    alert("Please enter your todo!");
    ref.current.focus()
}
    return (  
        <div className={styles.TodoInputContainer}>
            <input 
            type="text"
            placeholder="Enter your Todo"
            value={todoTitle}
            ref={ref}
            onChange={(e)=>setTodoTitle(e.target.value)}
            />
            <button onClick={()=>handleTodoAdd()}>Add</button>
        </div>
    );
}

export default TodoInput;