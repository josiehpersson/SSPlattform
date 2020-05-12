import React from "react";
import './components.css';
import { Container } from "reactstrap";

function ProfilBild(props){
    const imgstyle = {
        width: 70,
        height: 70,
        backgroundColor: 'grey',
        zIndex: 'inherit'
    }

    const containerstyle = {
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,
        zIndex: props.zIndex,
    }
    
    return(
       <div style={containerstyle}>
           <img src={props.img} alt="P" className="ProfilBild" style={imgstyle}/>
       </div>     
    )
}


export default ProfilBild