import React from 'react';
import MenuItem from '../menu/menu-item.component';
class Directory extends React.Component{
    constructor(){
        super();
        this.state ={
            sections:[{
                title:'hats',
                imageurl:'https://i.ibb.co/cvpntL1/hats.png',
                id:1,
                linkurl:'hats'
            },
            {
                title:'Jackets',
                imageurl:'https://i.ibb.co/px2tCc3/jackets.png',
                id:2,
                linkurl:''
            },
            {
                title:'Sneakers',
                imageurl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id:3,
                linkurl:''
            }]
        }
    }
    render(){
        return(
            <div className="row mt-2">
                {
                    this.state.sections.map(({id,...otherSectionProps})=>(
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;