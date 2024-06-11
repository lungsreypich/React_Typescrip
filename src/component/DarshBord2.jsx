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
function DarshBord2() {
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
                    <div style={{height:"100vh"}} className="letf  col-md-3 menu-bar shadow p-3">
                         <img className="rounded-circle" style={{width:"90px",height:"90px"}} src="a1.jpg" alt="" />
                        <a className="mx-3" href="#\" style={{fontSize:"1.5rem",color:"black"}}>DARSHBORD</a>
                        <br />
                        <div className="mt-4" >
                            
                        <MDBCol size='3'>
                            <MDBTabs className='flex-column text-center'>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                                        Home
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                                        Profile
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                                        Messages
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                        </MDBCol>
                        </div>
                    </div>  
                    <div className="rigth col-md-9">
                        <MDBCol size='9'>
                            <MDBTabsContent>
                                <MDBTabsPane open={verticalActive === 'tab1'}>
                                    <h1>Skills</h1>
                                    <div className="row">
                                        <div className="card p-3 col-md-3">
                                            <i class="fa-solid fa-display fa-2xl text-center p-3"></i>
                                            <h3 className="text-center" >Web Development</h3>
                                            <p className="text-center">Join Over 1 millian Students</p>
                                            <div className="card-footer">
                                                <button className="btn btn-warning w-100">Get Started</button>
                                            </div>
                                        </div>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane open={verticalActive === 'tab2'}>Profile content</MDBTabsPane>
                                <MDBTabsPane open={verticalActive === 'tab3'}>Messages content</MDBTabsPane>
                            </MDBTabsContent>
                        </MDBCol>
                    </div>  
                    </MDBRow>
                </div>
            </div>
        </>
    )
}
export default DarshBord2