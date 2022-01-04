import { ADDTODO } from "../actions/actionType";

const initialState=[];
function handleTodo(state=initialState,{type,payload}) {
//    console.log(state)
        switch(type){
            case ADDTODO:{ 
            return [...state,payload]
             
                        
            }
            default:{
                return state;
            }
            
        }
    

    
}

export default handleTodo;