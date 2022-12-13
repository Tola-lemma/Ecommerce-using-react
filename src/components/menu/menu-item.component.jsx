import React from 'react';
const MenuItem=({ title,imageUrl,size })=>(
<div 
 style={{
   backgroundImage:`url(${imageUrl})`
 }}
 className={`${size} col-md-4 border  background-image`}>
 <div className='border inside'>
    <h1 className="title">{title.toUppercase()}</h1> 
    <span className="subtitle">SHOP NOW</span>
 </div>
</div>
);
export default MenuItem;