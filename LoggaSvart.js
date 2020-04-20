import React from "react"
import logga from "./logga svart.png"

function LoggaSvart(props){
    return(
        <img className ={props.loggaStorlek} src={logga} alt="shayasolutionslogga"/>
    )
}

export default LoggaSvart
