import React from "react";
export default class Button extends React.Component{
    render(){
        
        return(
            <>
            <button onClick={this.props.click} className="btn btn-danger">{this.props.fullname}</button>
            </>
        )
    }
}