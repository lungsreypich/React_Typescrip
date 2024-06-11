import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
export default class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={input:""};
    }
    handlInput=(val)=>{
        this.setState({input: this.state.input+val})
    }
    handlEqual=()=>{
        this.setState({input:eval(this.state.input)})
    }
    render(){
        return(
            <>
                <div className="app">
                    <div className="cal-wapper">
                        <div className="row-1">
                             <Input input={this.state.input}/>
                        </div>
                        <div className="row-1">
                            <Button handlClick={this.handlInput}>7</Button>
                            <Button handlClick={this.handlInput}>8</Button>
                            <Button handlClick={this.handlInput}>9</Button>
                            <Button handlClick={this.handlInput}>/</Button>
                        </div>
                        <div className="row-1">
                            <Button handlClick={this.handlInput}>5</Button>
                            <Button handlClick={this.handlInput}>6</Button>
                            <Button handlClick={this.handlInput}>7</Button>
                            <Button handlClick={this.handlInput}>*</Button>
                        </div>
                        <div className="row-1">
                            <Button handlClick={this.handlInput}>1</Button>
                            <Button handlClick={this.handlInput}>2</Button>
                            <Button handlClick={this.handlInput}>3</Button>
                            <Button handlClick={this.handlInput}>+</Button>
                        </div>
                        <div className="row-1">
                            <Button handlClick={this.handlInput}>.</Button>
                            <Button handlClick={this.handlInput}>0</Button>
                            <Button handlClick={()=>this.handlEqual()}>=</Button>
                            <Button handlClick={this.handlInput}>-</Button>
                        </div>
                        <div className="row-1">
                        <Button handlClick={()=>this.setState({input:""})}>Clear</Button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}