import {useState, useEffect} from 'react'

function Test6() {
    const[count,updatecounter]=useState(0);
    useEffect(() => {console.log("clicked");},[count]);
      
  return (
    <div>
        <center>
            <h1>{count}</h1>
            <button onClick={()=>updatecounter(count+1)}>Change</button>

        </center>

    </div>
  )
}

export default Test6