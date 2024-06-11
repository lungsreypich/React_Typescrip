import React from "react";
const BoxDark={
    backgroundColor:"#000",
    width:"350px",
    height:"350px"
};
const BoxWhite={
    backgroundColor:"#fff",
    width:"350px",
    height:"350px"
};
export default class Box extends React.Component{
    render(){
        return(
            <>
            {(this.props.box)?(<div style={BoxDark}></div>):(<div style={BoxWhite}></div>)}
            </>
        )
    }
}