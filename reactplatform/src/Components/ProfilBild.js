import React from "react"

function ProfilBild(props){
    
    return(
       <div className="ProfilBild">
           <img src={props.img} alt="Profile pic" className="Logotypeboll" />
       </div>     
    )
}


export default ProfilBild