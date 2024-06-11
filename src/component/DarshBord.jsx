
function DarshBord(){
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="container-fluid">
                <div className="row">
                    <div style={{height:"100vh"}} className="letf  col-md-3 menu-bar shadow p-3">
                        <img className="rounded-circle" style={{width:"90px",height:"90px"}} src="a1.jpg" alt="" />
                        <a className="mx-3" href="#\" style={{fontSize:"1.5rem",color:"black"}}>DARSHBORD</a>
                        <br />
                        <div className="mt-4" >
                            <i class="fa-solid fa-house fa-2xl"></i>
                            <a className="mx-3" style={{fontSize:"1.5rem" ,color:"black"}} href="#">Home</a>
                        </div>
                        <div className="mt-4" >
                            <i class="fa-solid fa-user fa-2xl"></i>
                            <a className="mx-3" style={{fontSize:"1.5rem" ,color:"black"}} href="#">Profile</a>
                        </div>
                        <div className="mt-4" >
                            <i class="fa-solid fa-wallet fa-2xl"></i>
                            <a className="mx-3" style={{fontSize:"1.5rem" ,color:"black"}} href="#">Wallet</a>
                        </div>
                        <div className="mt-4" >
                            <i class="fa-solid fa-chart-line fa-2xl"></i>
                            <a className="mx-3" style={{fontSize:"1.5rem" ,color:"black"}} href="#">Analytics</a>
                        </div>
                        <div className="mt-4" >
                            <i class="fa-solid fa-list-check fa-2xl"></i>
                            <a className="mx-3" style={{fontSize:"1.5rem" ,color:"black"}} href="#">Tasks</a>
                        </div>
                        <div className="mt-4" >
                            <i class="fa-solid fa-gear fa-2xl"></i>
                            <a className="mx-3" style={{fontSize:"1.5rem" ,color:"black"}} href="#">Sittings</a>
                        </div>
                        <div className="mt-4" >
                            <i class="fa-solid fa-circle-info fa-2xl"></i>
                            <a className="mx-3" style={{fontSize:"1.5rem" ,color:"black"}} href="#">Help</a>
                        </div>
                    </div>
                    <div className="rigth col-md-9">
                        <div className="heard d-flex justify-content-between">
                            <h1>Skills</h1>
                            <i class="fa-solid fa-user-gear fa-2lg p-3"></i>
                        </div>
                        <div className="container d-flex ">
                            <div className="mt-4 col-md-4 menu-bar shadow p-3 ">
                                <i class="fa-solid fa-display fa-2xl d-flex justify-content-center p-3"></i>
                                <h3 className="mx-4">Web Development</h3>
                                <p className=" d-flex justify-content-center">Join Over 1 millian Students</p>
                                <br />
                                <button className="btn btn-warning " style={{width:"300px",height:"40px"}}>Get Started</button>
                            </div>

                            <div className="mt-4 col-md-4 menu-bar shadow p-3 mx-2">
                                <i class="fa-brands fa-wordpress fa-2xl d-flex justify-content-center p-3"></i>
                                <h2 className="mx-4">Word Press</h2>
                                <p className=" d-flex justify-content-center">Join Over 3 millian Students</p>
                                <br />
                                <button className="btn btn-warning " style={{width:"300px",height:"40px"}}>Get Started</button>
                            </div>

                            <div className="mt-4 col-md-4 menu-bar shadow p-3 mx-2">
                                <i class="fa-solid fa-palette fa-2xl d-flex justify-content-center p-3"></i>
                                <h3 className="mx-4">Graphic Design</h3>
                                <p className=" d-flex justify-content-center">Join Over 2 millian Students</p>
                                <br />
                                <button className="btn btn-warning " style={{width:"300px",height:"40px"}}>Get Started</button>
                            </div>
                        </div>
                        <h1 className="mt-3">My Courses</h1>
                        <div className="box-container menu-bar shadow p-3">
                            <div className="nav" style={{fontSize:"1.2rem"}}>
                                <a className="mx-3" style={{color:"black"}} href="#">In Progress</a>
                                <a className="mx-3 text-decoration-none" style={{color:"black"}} href="#">Expiore</a>
                                <a className="mx-3 text-decoration-none" style={{color:"black"}} href="#">Incoming</a>
                                <a className="mx-3 text-decoration-none" style={{color:"black"}} href="#">Finished</a>
                            </div>
                        <div className="row  mt-3">
                            <div className="col-md-4 bg bg-body-secondary  mx-2 menu-bar shadow">
                                <h1>HTML</h1>
                                <p>80% - Progress</p>
                                <div className="img d-flex justify-content-between">
                                <button className="btn btn-dark mt-5" style={{width:"100px",height:"50px"}}>Continue</button>
                                <i class="fa-brands fa-html5" style={{fontSize:"7rem",color:"orange"}}></i>
                                </div>
                            </div>

                            <div className="col-md-4 bg bg-body-secondary mx-2 menu-bar shadow">
                                <h1>CSS</h1>
                                <p>50% - Progress</p>
                                <div className="img d-flex justify-content-between">
                                <button className="btn btn-dark mt-5" style={{width:"100px",height:"50px"}}>Continue</button>
                                <i class="fa-brands fa-css3-alt" style={{fontSize:"7rem",color:"green"}}></i>
                                </div>
                            </div>

                            <div className="col-md-3 bg bg-body-secondary mx-2 menu-bar shadow">
                                <h1>JavaScrip</h1>
                                <p>30% - Progress</p>
                                <div className="img d-flex justify-content-between">
                                <button className="btn btn-dark mt-5" style={{width:"100px",height:"50px"}}>Continue</button>
                                <i class="fa-brands fa-js" style={{fontSize:"7rem",color:"blue"}}></i>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DarshBord




