import { useState,useEffect } from "react";
import {questions} from "./QuizAppQuestions";
import "./Quze.scss";
export default function QuizeApp(){
    const [click,setClick]=useState(false);
    const[score,setScore]=useState(0);
    const[currentQ,setCurrentQ]=useState(0);
    const handleClick=(isCorrect)=>{
        if(isCorrect)setScore((prev)=>prev+1);
        const questionNext= currentQ+1;
        if(questionNext<questions.length) setCurrentQ(questionNext);
        else setClick(true);
    }
    const Back=()=>{
        setCurrentQ(0);
        setScore(0);
        setClick(false);
    }
    return(
        <>
        <div className="app container mt-5">
            <div className="template  w-75 border border-danger rounded">
                 {click?(
                    <div className="">
                        <div className="content-score ">
                            <h1>You have Score:{score} / of out {questions.length}</h1>
                            <button onClick={()=>Back()} className="btn btn-outline-info mt-3" >Back</button>
                        </div>
                    </div>
                 ):(
                    <div className="row">
                        <div className="col-lg-4 col-md-4 ">
                            <h2>Questions{currentQ}/{questions.length}</h2>
                            <h3 className="questionText">{questions[currentQ].questionText}</h3>
                        </div>
                        <div className="col-lg-8 col-md-8 ">
                            <div className="answer-text">
                                {questions[currentQ].answerOptions.map((answerOptions,i)=>{
                                    return(
                                        <>
                                            <button onClick={()=>handleClick(answerOptions.isCorrect)} className=" form-control mt-2 p-3">
                                                {answerOptions.answerText}</button>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                 )}
            </div>
        </div>
        </>
    )
}