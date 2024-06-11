import React from "react";
import { Component } from "react";
export default class Home extends React.Component{
    render(){
        return (
            <>
            <div className="container p-0">
                <div className="row">
                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#" className="nav-link text-dark">Navbar</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-dark">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-dark">Link</a></li>
                    <li><a href="#" className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown">Dropdown</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-dark">Disabled</a></li>
                    <input type="text" placeholder="Search" />
                    <button className="btn btn-primary text-white ">Search</button>
                </ul>
                </div>
                <h4 className="bg-warning mt-3">Hello World</h4>
                <h6 className="bg-info">Hello React Application</h6>
                <img src="a1.jpg" className="rounded-circle mb-5 " width={200} height={150}  alt="Cinque Terre" />
            </div>
            </>
        )
    }
}