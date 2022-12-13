import React from 'react';
const MenuItemB=({title,imageurl})=>(

<div 
 style={{
   backgroundImage:`url(${imageurl})`
 }}
 className="col-md-6 border  background-image">
  <div className='border inside'>
    <h1 className="title">{title.toUpperCase()}</h1> 
    <span className="subtitle">SHOP NOW</span>
 </div>
 </div>

);
export default MenuItemB;