// const initialState=0;
// const incDrc=(state=initialState,action)=>{
//         switch(action.type){
//             case "INCREMENT": return state+action.payload




//             case "DECREMENT": return state-action.payload;
//             default :return state;
//         }
// }
// export default incDrc;
import { ADDBYX, DEVIDEBYX, MULTIPLYBYX, SUBSTRACTBYX,DECREMENT, INCREMENT } from "../actions/actionType";
export const initialState=0;
function upDown(state=initialState,{type,payload}) {
    switch(type){
        case INCREMENT:{
            return state+payload  ;         
        }
        case DECREMENT:{
            return state-payload;
        }
        case ADDBYX:{
            return state+ +payload;
        }
        case SUBSTRACTBYX:{
            return state- +payload;
        }

        case MULTIPLYBYX:{
            return state* +payload;
        }
        case DEVIDEBYX:{
            return state/ +payload;
        }
        default:{
            return state;
        }
    }
}

export default upDown;