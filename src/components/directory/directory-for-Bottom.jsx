import React from 'react';
import MenuItemB from '../menu/menu-item-second-componet';

class DirectoryB extends React.Component{
    constructor(){
        super();
        this.state ={
                section:[{
            
                title:'Womens',
                imageurl:'https://i.ibb.co/GCCdy8t/womens.png',
                id:4
            },
            {
                title:'Mens',
                imageurl:'https://i.ibb.co/R70vBrQ/men.png',
                id:5
            }
        ]
        }
    }
    render(){
        return(
        <div>
            <div className="row mt-2">
            {
                // this.state.section.map(({title,imageurl,id})=>(  //the same as the the below one
                    this.state.section.map(({id,...theSameOtherState})=>(
                    <MenuItemB key={id} {...theSameOtherState}/>
                ))
            }
        </div></div>
        
        )
    }
}

export default DirectoryB;