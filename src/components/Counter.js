import React from 'react'
import { useState } from 'react'


function Counter() {
    const [counter,setCounter]=useState(0)
    function increment(){
      setCounter(counter+1)
    }
    function decrement(){
        if (counter!==0) {
            setCounter(counter-1)  
        }
      }
      function reset(){
        setCounter(0)
      }    
  
  return (
    <div className="App">
    <header className="App-header">
       <nav class="navbar navbar-light bg-warning">
         <div class="container"><h1>Counter Application</h1>
         </div>
       </nav>
       <div style={{
       backgroundColor:'pink',
       flexDirection:'column',
       textAlign:'center',
       justifyContent:'center',
       border:'1px solid black',
       padding:'200px',
       margin:'auto'
    }} >
      <h3>Counter Application</h3>
      <h1>{counter}</h1>
      <button style={{backgroundColor:'green',color:'white',padding:'5px',margin:'5px'}} onClick={increment}>Add</button>
      <button style={{backgroundColor:'gray',color:'white',padding:'5px',margin:'5px'}} onClick={decrement}>Substract</button>
      <button style={{backgroundColor:'red',color:'white',padding:'5px',margin:'5px'}} onClick={reset}>Reset</button>

    </div>
    </header>
  </div>


  )
}

export default Counter
