import React from "react";
import { Component } from "react";
export default class Navbar extends React.Component{
    render(){
        return(
            <>
                <div className="container">
                    <div className="row">
                        <ul className="nav nav-pills">
                            <li className="nav-item"><a href="#" className="nav-link text-dark">Navbar</a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-dark">home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-dark">about</a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-dark">products</a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-dark">contact</a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-dark">sign up</a></li>
                            
                        </ul>
                    </div>
                            <h4 className="bg-primary mt-3">Hello World</h4>
                            <h6 className="bg-success text-light">Hello React Application</h6>
                            <img src="a1.jpg" className="rounded-circle" width={250} height={150} alt="Cinque Terre" />
                            <br />
                            <button className="bg-danger text-light mt-3">Click Me</button>
                            <p>You are not allowed to vote!</p>
                            <img src="a2.jpg" width={200} alt="" />
                </div>
            </>
        )
    }
}