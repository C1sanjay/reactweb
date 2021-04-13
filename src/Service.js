import React from 'react';

import Card from './Card';
import Footer from './Footer';
import Sdata from './Sdata';

const Service = () => {
    return (
        <React.Fragment>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className="row gy-1 gx-3">
                            {
                                Sdata.map((val, ind) => {
                                    return <Card key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        aboutcontent={val.aboutcontent}
                                    />
                                })
                            }

                        </div>
                    </div>

                </div>
            </div>
            <Footer/>


        </React.Fragment>

    );
}
export default Service;