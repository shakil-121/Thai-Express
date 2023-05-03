import React from 'react';
import Lottie from "lottie-react"; 
import notFound from '../assets/68592-error-404-creature.json'

const Error = () => {
    return (
        <div>
            <Lottie className="mx-auto" style={{width:'500px',height:'500px'}} animationData={notFound} loop={true} />
        </div>
    );
};

export default Error;