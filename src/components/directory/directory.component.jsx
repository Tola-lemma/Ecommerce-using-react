import React from 'react';
import MenuItem from '../menu/menu-item.component';
class Directory extends React.Component{
    constructor(){
        super();
        this.state ={
            sections:[{
                title:'hats',
                imageurl:'https://i.ibb.co/cvpntL1/hats.png',
                id:1
            },
            {
                title:'Jackets',
                imageurl:'https://i.ibb.co/px2tCc3/jackets.png',
                id:2
            },
            {
                title:'Sneakers',
                imageurl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id:3
            }]
        }
    }
    render(){
        return(
            <div className="row mt-2 m-0">
                {
                    this.state.sections.map(({title,imageurl,id})=>(
                        <MenuItem key={id} title={title} imageurl={imageurl}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;