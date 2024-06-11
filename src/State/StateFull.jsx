import React from "react";
import Button from "./Botton";
export default class StateFull extends React.Component{
    constructor(props){
        super(props);
        {/*this.state={id:1001,name:"Koko",ckect:true}; */}
        this.handleChange2=this.handleChange2.bind(this);
    }
    handleChange2 =()=>{
        this.setState({id:1001,name:"Koko",ckect:false});
    }
    render(){
        return(
            <>
            <Button click={this.headleClick} fullname={this.state.name}></Button>
            </>
        )
    }
}