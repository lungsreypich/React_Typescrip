import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
function Learn() {
    const [verticalActive, setVerticalActive] = useState('tab1');

    const handleVerticalClick = (value) => {
        if (value === verticalActive) {
            return;
        }

        setVerticalActive(value);
    };
    return (
        <>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="container-fluid">
                <div className="row">
                    <MDBRow>
                    <div style={{height:"100vh"}} className="letf  col-2 menu-bar shadow p-3">
                         <img className="rounded-circle" style={{width:"50px",height:"50px"}} src="a1.jpg" alt="" />
                        <a className="mx-3" href="#\" style={{fontSize:"1.1rem",color:"black"}}>DARSHBORD</a>
                        <br />
                        <div className="mt-4" >
                            
                        <MDBCol size='2'>
                            <MDBTabs className='flex-column text-center'>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                                        <i class="fa-solid fa-house fa-2sm"></i>
                                         <a className='text-decoration-none' href="#">Home</a>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                                        <i class="fa-solid fa-user fa-2sm"></i>
                                        <a className='text-decoration-none' href="#">Profile</a>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                                        <i class="fa-solid fa-wallet fa-2sm"></i>
                                        <a className='text-decoration-none' href="#">Wallet</a>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleVerticalClick('tab4')} active={verticalActive === 'tab4'}>
                                        <i class="fa-solid fa-chart-line fa-2sm"></i>
                                        <a className='text-decoration-none' href="#">Analytic</a>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleVerticalClick('tab5')} active={verticalActive === 'tab5'}>
                                    <i class="fa-solid fa-list-check fa-2sm"></i>
                                    <a className='text-decoration-none' href="#">Tasks</a>
                                    </MDBTabsLink>
                                </MDBTabsItem>

                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleVerticalClick('tab6')} active={verticalActive === 'tab6'}>
                                    <i class="fa-solid fa-gear fa-2sm"></i>
                                    <a className='text-decoration-none' href="#">Sittings</a>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleVerticalClick('tab7')} active={verticalActive === 'tab7'}>
                                    <i class="fa-solid fa-circle-info fa-2sm"></i>
                                    <a className='text-decoration-none' href="#">Help</a>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                        </MDBCol>
                        </div>
                    </div>  
                    <div   className="rigth col-10 ">
                        <MDBCol size='10'>
                            <MDBTabsContent>
                                <MDBTabsPane open={verticalActive === 'tab1'}>
                                    <h1>Skills</h1>
                                    <div className="row">
                                        <div style={{width:"18rem"}} className="card p-3 col-md-3 mx-2 ">
                                            <i class="fa-solid fa-display fa-2xl text-center p-3"></i>
                                            <h3 className="text-center" >Web Development</h3>
                                            <p className="text-center">Join Over 1 millian Students</p>
                                            <div className="card-footer">
                                                <button className="btn btn-warning w-100">Get Started</button>
                                            </div>
                                        </div>
                                        <div style={{width:"18rem"}} className="card p-3 col-md-4 mx-2">
                                            <i class="fa-brands fa-wordpress fa-2xl text-center p-3"></i>
                                            <h3 className="text-center" >WordPress</h3>
                                            <p className="text-center">Join Over 2 millian Students</p>
                                            <div className="card-footer">
                                                <button className="btn btn-warning w-100">Get Started</button>
                                            </div>
                                        </div>
                                        <div style={{width:"18rem"}} className="card p-3 col-md-4 mx-2">
                                            <i class="fa-solid fa-palette fa-2xl text-center p-3"></i>
                                            <h3 className="text-center" >Graphic Design</h3>
                                            <p className="text-center">Join Over 3 millian Students</p>
                                            <div className="card-footer">
                                                <button className="btn btn-warning w-100">Get Started</button>
                                            </div>
                                        </div>
                                    </div>
                                    <h1>My Course</h1>
                                    <div className="box-container p-3">
                                    <div className="nav" style={{fontSize:"1.2rem"}}>
                                        <a className="mx-3" style={{color:"black"}} href="#">In Progress</a>
                                        <a className="mx-3 text-decoration-none" style={{color:"black"}} href="#">Expiore</a>
                                        <a className="mx-3 text-decoration-none" style={{color:"black"}} href="#">Incoming</a>
                                        <a className="mx-3 text-decoration-none" style={{color:"black"}} href="#">Finished</a>
                                    </div>
                                   <div className="box-card d-flex">
                                   <div className="card col-md-4 bg bg-body-secondary mt-3  mx-2 menu-bar shadow">
                                        <h1 className='mx-2'>HTML</h1>
                                        <p className='mx-2'>80% - Progress</p>
                                        <div className="img d-flex justify-content-between">
                                            <button className="btn btn-dark mt-5 mx-2" style={{width:"100px",height:"50px"}}>Continue</button>
                                            <i class="fa-brands fa-html5" style={{fontSize:"7rem",color:"orange"}}></i>
                                        </div>
                                    </div>
                                    <div className="card col-md-4 bg bg-body-secondary mt-3  mx-2 menu-bar shadow">
                                        <h1 className='mx-2'>CSS</h1>
                                        <p className='mx-2'>50% - Progress</p>
                                        <div className="img d-flex justify-content-between">
                                            <button className="btn btn-dark mt-5 mx-2" style={{width:"100px",height:"50px"}}>Continue</button>
                                            <i class="fa-brands fa-css3-alt" style={{fontSize:"7rem",color:"green"}}></i>
                                        </div>
                                    </div>
                                    <div className="card col-md-4 bg bg-body-secondary mt-3  mx-2 menu-bar shadow">
                                        <h1 className='mx-2'>JavaScrip</h1>
                                        <p className='mx-2'>30% - Progress</p>
                                        <div className="img d-flex justify-content-between mb-3">
                                            <button className="btn btn-dark mt-5 mx-2" style={{width:"100px",height:"50px"}}>Continue</button>
                                            <i class="fa-brands fa-js" style={{fontSize:"7rem",color:"blue"}}></i>
                                        </div>
                                    </div>   
                                   </div>
                                </div>
                                </MDBTabsPane>
                                <MDBTabsPane open={verticalActive === 'tab2'}>Profile content</MDBTabsPane>
                                <MDBTabsPane open={verticalActive === 'tab3'}>Wallet content</MDBTabsPane>
                                <MDBTabsPane open={verticalActive === 'tab4'}>Analytics content</MDBTabsPane>
                                <MDBTabsPane open={verticalActive === 'tab5'}>Tasks content</MDBTabsPane>
                                <MDBTabsPane open={verticalActive === 'tab6'}>Sittings content</MDBTabsPane>
                                <MDBTabsPane open={verticalActive === 'tab7'}>Help content</MDBTabsPane>
                            </MDBTabsContent>
                        </MDBCol>
                    </div>  
                    </MDBRow>
                </div>
            </div>
        </>
    )
}
export default Learn