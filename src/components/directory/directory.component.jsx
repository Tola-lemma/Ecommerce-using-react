import React from 'react';
class Directory extends react.Component{
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
            },
            {
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
}