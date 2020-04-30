import React from "react"

function InfoRad(props){
  return(
    <div className="InfoRad">
      <div className="top">
          <h6>{props.rubrik}</h6>
          <h6>{props.text}</h6>
        </div>  
      <div className="bottom">    
      </div>
    </div> 
  )
}



export default InfoRad