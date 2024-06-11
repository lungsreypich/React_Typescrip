import { useState } from "react";
export default function State(){
    const [name,setName]=useState("Data");
    const handlsetName=()=>{
        setName("Change to Rithy");
    }
    return(
        <>
            <div className="container mt-3">
                <h1>{name}</h1>
                <button onClick={handlsetName} className="btn btn-warning">Change State</button>
            </div>
        </>
    )
}