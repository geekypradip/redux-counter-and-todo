import styles  from "./style/style.module.css";
import { useSelector,useDispatch } from "react-redux";
import { Decrement, Increment } from "../redux/counter/actions/action";

function Count() {
    const countState=useSelector((state)=>state.counter);
const dispatch=useDispatch();
    return (
        <>
       <div className="container">

        <h1>
            Increment Decrement with Redux
        </h1>
        <div className={styles.holder}>
            <div onClick={()=>dispatch(Increment(1))}>+</div>
            <div>{countState}</div>
            <div onClick={()=>dispatch(Decrement(1))}>-</div>

        </div>

       </div>

        </>
      );
}

export default Count;