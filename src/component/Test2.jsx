import React from "react";
import { Component } from "react";
export default class Test2 extends React.Component{
    handler =()=>{
        alert("Welcome to Learn React JS");
    }
    render(){
        return (
            <>
            <div className="container mt-5">
                <button onClick={this.handler} className="btn btn-success">Click Me</button>
            </div>
            </>
        )
    }
}