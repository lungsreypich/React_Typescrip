import React from "react";
import Button1 from "./Botton1";
import Box from "./Box";
export default class StateFull1 extends React.Component{
    constructor(props){
        super(props);
        this.state={check:false}
        this.toggleMode=this.toggleMode.bind(this);
         
    }
    toggleMode=()=>{
         let mode =!this.state.check;
         this.setState({check:mode});
    }
    render(){
        return(
            <>
                <div className="container mt-5">
                    <Box box={this.state.check}/>
                    <Button1 click={this.toggleMode}/>
                </div>
            </>
        )
    }
}
