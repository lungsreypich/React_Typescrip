import { useState } from "react";
function ArrayHook(){
    const [info,setInfo]=useState({
        id:"01",
        name:"Koko",
        gender:"Female",
        grade:12 
    });
    const handleChange=({target})=>{
        const {name,value}=target;
        setInfo((prev)=>({...prev,[name]:value}));
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(JSON.stringify(info,"",1));
    };
    const [store,setStore]=useState([]);
    const addStore=()=>{
        if(info.id&&info.name&&info.gender&&info.grade){
            setStore((prev)=>[...prev,info]);
            setInfo({id:"01",name:"koko",gender:"Female",grade:12});
        }else{
            alert("Please input all Data!");
        }
    }
    return(
        <>
            <div className="container d-flex justify-content-center mt-5">
                <div className="p-3 border border-danger rounded w-50">
                    <h1 className=" text-center">Add Information</h1>
                    <label htmlFor="id">ID:{info.id?info.id:""}</label>
                    <input type="text" id="id" name="id" value={info.id} className="form-control" onChange={handleChange} />
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={info.name} className="form-control" onChange={handleChange} />
                    <label htmlFor="gender">Gender</label>
                    <input type="text" id="gender" name="gender" value={info.gender} className="form-control" onChange={handleChange}/>
                    <label htmlFor="grade">Grade</label>
                    <input type="text" id="grade" name="grade" value={info.grade} className="form-control" onChange={handleChange}/>
                    <button onClick={addStore} className="btn btn-outline-success mt-2">Submit</button>
                    <button className="btn btn-outline-warning mt-2 mx-2">Clear</button>
                </div>
            </div>
            <div className="display Data container mt-3">
                    <div className="row">
                        {
                            store.length!== 0 &&(
                                <>
                                {store.map((item=>{
                                    return(
                                        <>
                                        <div style={{width:"18em"}} className="card col-lg-3 col-md-3 border border-success p-2 mx-2 mt-2">
                                            <h3 className="border border-danger rounded p-1">Name is {item.name}</h3>
                                            <h3>ID : {item.id}</h3>
                                            <h4>Gender : {item.gender}</h4>
                                        </div>
                                        </>)
                                }))}
                                </>
                            )
                        }
                    </div>
                </div>
        </>
    );
}
export default ArrayHook