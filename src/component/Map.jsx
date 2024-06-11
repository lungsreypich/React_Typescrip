const Map=()=>{
    var Array=[
            {id:1001,name:"Nana",description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid!"},
            {id:1002,name:"Koko",description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid!"},
            {id:1003,name:"Sok",description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid!"},
    ];
    return (
        <>
            <div className="container">
                <div className="row ">
                    {Array.map((e)=>{
                         return(
                            <div className="col-xl-3 col-lg-3 border border-primary">
                            <p>{e.id}</p>
                            <p>{e.name}</p>
                            <p>{e.description}</p>
                            </div>
                         )
                        }
                    )}
                </div>
            </div>
        </>
    )
}
export default Map