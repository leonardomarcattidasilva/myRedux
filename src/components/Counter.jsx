import React from "react";
import useCounter from "../hooks/useCounter";
import useShow from "../hooks/useShow";
import styles from './Counter.module.css'

const Counter = () => {
   const {counter, increase, decrease, add, del, checkMin} = useCounter()
   const {show, toggleShow} = useShow()
   return <div className={styles.counter}>
      <div className={styles.display}>
         <h1 className={show ? `${styles.show}` : `${styles.hide}`}>{counter}</h1>
      </div>
      <div>
         <button type="button" onClick={toggleShow} className={`btn btn-primary ${styles.hideShow}`}>Show/Hide</button>
         <div>
            <button type="button" onClick={increase} className={`${styles.button} btn btn-success`}>+</button>
            <button type="button" onClick={decrease} disabled={checkMin()} className={`${styles.button} btn ${checkMin() ? 'btn-disabled' : 'btn-danger'}`}>-</button>
            <button type="button" onClick={() => add(5)} className={`${styles.button} btn btn-warning`}>Add 5</button>
            <button type="button" onClick={() => del(5)} disabled={checkMin()} className={`${styles.button} btn ${checkMin() ? 'btn-disabled' : 'btn-warning'}`}>Remove 5</button>
         </div>
      </div>
   </div>
}

export default Counter;