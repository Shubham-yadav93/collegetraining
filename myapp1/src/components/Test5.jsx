import { useState } from "react"

function Test5(){
    let[counter,updateCounter]=useState(0)
    return(
        <div>
            <h2>Counter variable value is : {counter} </h2>
            <button onClick={()=>updateCounter(++counter)}>Increment</button>
            <button onClick={()=>updateCounter(--counter)}>Decrement</button>
        </div>
    )
}
export default Test5