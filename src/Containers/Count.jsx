import styles  from "./style/style.module.css";
import { useSelector,useDispatch } from "react-redux";
import { AddByX, Decrement, DevideByX, Increment, MultiplyByX, SubstractByX } from "../redux/counter/actions/action";
import { useState } from "react";

function Count() {
    const countState=useSelector((state)=>state.counter);
    const [state,setState]=useState("")
const dispatch=useDispatch();
    return (
        <>
       <div className="container">

        <h1>
           ArithMatic operations with redux
        </h1>
        <div className={styles.holder}>
            <div onClick={()=>dispatch(Increment(1))}>+</div>
            <div>{countState}</div>
            <div onClick={()=>dispatch(Decrement(1))}>-</div>

        </div>
        <div className={styles.ArithMaticHolder}>
          <input
          type="number"
            value={state}
            onChange={(e)=>setState(e.target.value)}
            placeholder="enter a number"
          />
          <div>

            <button onClick={()=>dispatch(AddByX(state))}>Add</button>
            <button onClick={()=>dispatch(SubstractByX(state))}>substract</button>
            <button onClick={()=>dispatch(MultiplyByX(state))}>Multiply</button>
            <button onClick={()=>dispatch(DevideByX(state))}>Devide</button>

          </div>
        </div>
       </div>

        </>
      );
}

export default Count;