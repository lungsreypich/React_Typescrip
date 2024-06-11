import React from "react";

export default class Mount extends React.Component{
    constructor(props){
        super(props);
        this.state={time: new Date()};
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({time : new Date()});
        },1000)
      }
    componentDidUpdate(){
        
    }
    render(){
        return(
            <>
                <div className=" text-light bg-dark d-flex justify-content-center align-items-center container"><h1>{this.state.time.toLocaleTimeString()}</h1></div>
            </>
        )
    }
}