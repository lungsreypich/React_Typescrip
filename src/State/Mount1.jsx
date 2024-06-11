import React from "react";

export default class Mount1 extends React.Component{
    constructor(props){
        super(props);
        this.state={time: new Date()};
    }
    StartInerval(){
        const delay=1000;

        this.timeId=setInterval(()=>{
            this.setState({time:new Date()});
        },delay)
    }
    componentDidMount(){
        this.StartInerval();
    }
    componentDidUpdate(){
        clearInterval(this.timeId)
        this.StartInerval();
    }
    render(){
        return(
            <>
                <div className=" text-light bg-dark d-flex justify-content-center align-items-center container"><h1>{this.state.time.toLocaleTimeString()}</h1></div>
            </>
        )
    }
}