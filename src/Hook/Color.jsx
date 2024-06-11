import React, { useState } from "react";
import "../App.css"
export default function Color(){
    const[color,setColor]=useState("blue");
    const background={backgroundColor:color};
    return(
        <>
            <div className="container mt-3">
                <div style={background} className="box"></div>
                <button onClick={()=>setColor("green")} className="btn btn-success mt-3 mx-3">Green</button>
                <button onClick={()=>setColor("red")} className="btn btn-danger mt-3 mx-3">red</button>
            </div>
        </>
    )
}