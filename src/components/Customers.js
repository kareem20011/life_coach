import React from 'react';
import './style/Customers.css'
const Customers = () => {
    return (
        <div className='Customers'>
            <div className='bgFixed'>
                <div className='content'>
                    <h5>Let’s work together</h5>
                    <h1>I produce results for our customers</h1>
                    <div className='row nums'>
                        <div className='col-lg-3 col-sm-12'>
                            <h1>10</h1>
                            <p>Years Of Experience Helping Clients Achieve Their Goals</p>
                        </div>
                        <div className='col-lg-3 col-sm-12'>
                            <h1>15</h1>
                            <p>Help Clients From Over 15 Countries</p>
                        </div>
                        <div className='col-lg-3 col-sm-12'>
                            <h1>10</h1>
                            <p>Voted Top 10 Life Coach In The Country</p>
                        </div>
                        <div className='col-lg-3 col-sm-12'>
                            <h1>90%</h1>
                            <p>Clients Achieved Desired Outcome</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Customers;
