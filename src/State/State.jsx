import React from "react";
export default class State extends React.Component{
    constructor(props){
        super(props);
        this.state={id:1001,name:"Koko",ckect:true};
    }
    handleChange =()=>{
        this.setState({id:2004,name:"Nana",ckect:false});
    }
    render(){
        return(
            <>
                <div className="container mt-3">
                    <h2>{this.state.id}</h2>
                    <h2>{this.state.name}</h2>
                     {/*<h2>{this.state.ckect}</h2>*/}
                     {/* <button onClick={this.handleChange} className="btn btn-primary">Change</button>*/}
                     <button onClick={this.handleChange} className="btn btn-primary">Change</button>

                </div>
            </>
        )
    }
}