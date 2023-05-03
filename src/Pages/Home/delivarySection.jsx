import React from 'react';
import dlv from '../../assets/dlv.jpg'
import { FaPhone } from "react-icons/fa";

const DelivarySection = () => {
    return (
        <div style={{backgroundColor:'rgb(248, 247, 242)'}} className='my-5 px-5 d-flex'>
            <div className='pt-5 col-6'>
                <img style={{height:'400px',width:'400px'}} className='img-fluid' src={dlv} alt="" />
            </div>
            <div className='col-6 pt-5'>
              <p style={{color:'rgb(142, 198, 63)'}} className='pt-5'>WE OFFER</p>
              <h1 className='fw-bold'>Free <span style={{color:'rgb(142, 198, 63)'}}>Delivery!</span></h1>
              <p>Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn nuts salsify bunya pie sprout coriander water.</p>
              <a className='text-decoration-none' href="tel:%200800-555-1234">
              <div style={{backgroundColor:'rgb(142, 198, 63)',width:'50%'}} className='d-flex align-items-center px-3 py-3 rounded fw-bold'>
              <p className='mb-0 pe-2 text-light'>ORDER NOW: 0800-555-1234</p> 
              <FaPhone className='text-light'></FaPhone>
              </div>
              </a>
            </div>
        </div>
    );
};

export default DelivarySection;