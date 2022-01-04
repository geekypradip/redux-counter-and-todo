import { ADDTODO } from "./actionType"

export const addTodo=(todo)=>{
    return {
        type:ADDTODO,
        payload:todo
    }
}