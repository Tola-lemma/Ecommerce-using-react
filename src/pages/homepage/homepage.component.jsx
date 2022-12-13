import React from 'react';
const HomePage = ()=>(
    <div className="container">
        <div className="row mt-2">
            
        <div className="col-md-4 border">
             <div className='border inside'>    
               <h1 className="title">JACKETS</h1> 
                <span className="subtitle">SHOP NOW</span>
           </div>
        </div>
        <div className="col-md-4 border">
               <div className='border inside'>
                <h1 className="title">SNEAKERS</h1> 
                <span className="subtitle">SHOP NOW</span>
             </div>
        </div>
        </div>
        <div className="row mt-2">
        <div className="col-md-6 border">
                     <div className='border inside'>
                    <h1 className="title">MENS</h1> 
                    <span className="subtitle">SHOP NOW</span>
                    </div>
        </div>
        <div className="col-md-6 border">
               <div className='border inside'>
                    <h1 className="title">WOMENS</h1> 
                    <span className="subtitle">SHOP NOW</span>
               </div>
        </div>
        </div>
        
    </div>
);
export default HomePage;