// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from '../style/style.module.css'

function TodoList() {
    // const [todo,]=useState([]);
    const reduxTodo=useSelector((state)=>state.todo)
     console.log(reduxTodo)
    // useEffect(()=>{

    //     setTodo([...todo,reduxTodo])
    // },[])
//   console.log(todo)
    return (  
        <div className={styles.todoListContainer}>
          {
            reduxTodo && reduxTodo.map((item)=>
            <div key={item.id} className={styles.todoListHolder}>
                <div >{item.title}</div>
                <div>status:    {item.status?"true":"false"}</div>
            </div>
            )
          }

        </div>
    );
}

export default TodoList;