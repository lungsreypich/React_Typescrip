import { useState,useEffect } from "react";
function Cleanup(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.addEventListener("mousedown",handleMousedown);
        return()=>{
            document.removeEventListener("mousedown",handleMousedown);
        };
    });
    const handleMousedown=()=>{
        console.log("Effect working!");
    }
    return (
        <>
        <h1 className=" text-center">You can Check Count :{count}</h1>
        <button onClick={handleMousedown} className="btn btn-danger">Click Me</button>
        </>
    )
}
export default Cleanup