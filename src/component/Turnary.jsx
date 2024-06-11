
const Turnary=()=>{
    let Name="Nana";
    return(
        <>
        {/* (a>b)? a:b */}
        {
            (Name="Nana")?
            (
                <div>
                      <h1>Yes This Good{Name}</h1>
                </div>
            ):(
                <div>
                      <h1>Not Nana</h1>
                </div>
            )
        }
        </>
    )
}
export default Turnary