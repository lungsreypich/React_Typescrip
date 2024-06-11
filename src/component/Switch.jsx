import React from "react";
import Swal from "sweetalert2";
export default class Switch extends React.Component{
    render(){
        const Handle=()=>{Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });}
        return(
            <>
           {/*<button onClick={Handle} className="btn btn-dark">Click</button> */}
            <img className="animate__animated animate__bounce" src="a1.jpg" style={{width:"250px",height:"250px"}} alt="" />
            </>
        )
    }
}