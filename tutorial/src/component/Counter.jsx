import React, {useState} from 'react';
// function test(){

//     const [counter,setCounter] = useState(0)
//     function plus(){
//         setCounter((previous)=> previous +10)
        
//     }
//     function minus(){
//         setCounter((previous)=> previous -10)
//     }
//     return(
//         <div>
//             <h1>Counter Test: {counter} </h1>
//             <button onClick={()=> plus()}>Increment</button>
//             <button onClick={()=> minus()}>Decrement</button>
//         </div>
//     )
// }
const Counter = () =>{
    const [num, count] = useState(0);

    function plus(){
        count((prev) => prev +1)
    }

    function minus(){
        count((prev) => prev -1)
    }
    return(
        <>
        <h1>Counting machine</h1>
        <h2>Cal num: {num}</h2>
        <button onClick={() => plus()}>+</button>
        <button onClick={()=>minus()}>-</button>
        </>
    )
}


export default Counter