import { useState,useEffect } from "react";
function Mouse(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.addEventListener("mousedown",handleMousedown);
    });
    const handleMousedown=()=>{
        console.log("Effect working!");
    }
    const handlClick=()=>{
        setCount((prev)=>prev+1);
    }
    return(
        <>
        <h1 className=" text-center">You can Check Count :{count}</h1>
        <button onClick={handleMousedown} className="btn btn-danger">Click Me</button>
        </>
    )
}
export default Mouse