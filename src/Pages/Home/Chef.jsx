import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const Chef = () => { 
const [chefs,setchefs]=useState([]) 
useEffect(()=>{
    fetch('https://thai-express-server-shakil-121.vercel.app/chef')
    .then(res=>res.json())
    .then(data=>setchefs(data))
},[])
  

    return (
        <div className='mt-5'>
            <h2 className='text-center mb-5'>OUR ALL CHEF</h2>
            <div style={{width:'90%'}} className='row mx-auto'>
            {
                chefs.map(chef=><ChefCard 
                key={chef.id} 
                chef={chef}
                >
                </ChefCard>)
            }
            </div>
        </div>
    );
};

export default Chef;