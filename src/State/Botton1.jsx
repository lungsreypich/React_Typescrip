import React from "react";
export default class Button1 extends React.Component{
    render(){
        
        return(
            <>
            <button onClick={this.props.click} className="btn btn-danger">Click Change</button>
            </>
        )
    }
}