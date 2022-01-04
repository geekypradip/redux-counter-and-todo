// export const Increment=(number)=>{
//     return{
//         type:"INCREMENT",
//         payload:number
//     }
// }
// export const Decrement=(number)=>{
//     return{
//         type:"DECREMENT",
//         payload:number
//     }

 import { ADDBYX, DECREMENT, DEVIDEBYX, INCREMENT, MULTIPLYBYX, SUBSTRACTBYX } from "./actionType";

export const Increment=(number)=>{
  
         return {
        type:INCREMENT,
        payload:number
    
    }
   
}
export const Decrement=(number)=>{
    return{
        type:DECREMENT,
        payload:number
    }
}
export const AddByX=(number)=>{
    return{
        type:ADDBYX,
        payload:number
    }

}
export const SubstractByX=(number)=>{
    return{
        type:SUBSTRACTBYX,
        payload:number
    }
}
export const MultiplyByX=(number)=>{
    return{
        type: MULTIPLYBYX,
        payload:number
    }

}

export const DevideByX=(number)=>{
    return{
        type: DEVIDEBYX,
        payload:number
    }
}