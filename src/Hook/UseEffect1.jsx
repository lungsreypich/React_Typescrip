import { useState,useEffect } from "react";

function UseEffect1(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log(`Count: $(count)`);
    })
    const handlClick=()=>{
        setCount((prev)=>prev+1);
    }
    return(
        <>
        <h1 className=" text-center">You can Check Count : {count}</h1>
        <button onClick={handlClick} className="btn btn-danger">Click Me</button>
        </>
    )
}
export default UseEffect1