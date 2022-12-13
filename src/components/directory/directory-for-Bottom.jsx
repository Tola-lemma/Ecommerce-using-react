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
        
            <div className="row mt-2 m-0">
            {
                this.state.section.map(({title,imageurl,id})=>(
                    <MenuItemB key={id} title={title} imageurl={imageurl}/>
                ))
            }
        </div>
        
        )
    }
}

export default DirectoryB;