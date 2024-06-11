import React, { useEffect, useState } from "react";
import "./Temperature.scss"
export default function Temperature(){
    const [count,setCount]=useState(0);
    const [color,setColor]=useState("blue");
    useEffect(()=>{
        if(count>15){
            setColor("red");
        }else{
            setColor("blue");
        }
    },[count]);
    const handleClick=()=>{
        setCount((preCount)=>preCount+1);
    };
    const handleClick2=()=>{
        setCount((preCount)=>preCount-1);
    };
    const background={background:color};
    return(
        <>      
        <div className="App text-light">
            <div className="temp">
                <h1 className=" text-center">Temperature App</h1>
                <div style={background} className="box">
                    <h1>{count}<sup>o</sup>C</h1>
                    
                </div>
                <div className="button mt-5">
                    <div onClick={handleClick} className=" btn btn-success mx-5" style={{fontSize:"30px"}}>+</div>
                    <div onClick={handleClick2} className=" btn btn-danger" style={{fontSize:"30px"}}>-</div>
                </div>
            </div>
        </div>
        </>
    )
}