import { useState } from "react";
export default function Test(){
    const[color,setColor]=useState("gray");
    const background={backgroundColor:color};
    return(
        <>
        <div style={background}>
                <p>The color is{color}</p>
                <button onClick={()=>setColor("red")}className="btn btn-danger mx-3">Change to red</button>
                 <button onClick={()=>setColor("blue")}className="btn btn-info">Change blue</button>
            </div>
        </>
    )
}