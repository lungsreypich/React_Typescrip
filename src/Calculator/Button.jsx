import "./calculate.scss";
const isOperator=(value)=>{
    return !isNaN(value)|| value ==="."||value==="=";
}
export const Button=(props)=>(
    <div onClick={()=>props.handlClick(props.children)} className={`button ${isOperator(props.children)?null:"operator"}`}>
        {props.children}
    </div>
)