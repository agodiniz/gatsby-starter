import React from "react"

export default function Header(props) {
    return(
        <h1 style={{color: 'black'}}>{props.headerText}</h1>
    )
}