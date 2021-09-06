import React from "react"

import { Link } from "gatsby"

import Header from "../components/header"

export default function About(){
    return (
        <div style={{color: 'purple'}}>
    <div style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
  }}>
    <Link to="/" style={{marginRight: 10}}>Home</Link>
    <Link to="/about" style={{marginRight: 10}}>About</Link>
    <Link to="/contact" style={{marginRight: 10}}>Contact</Link>
    </div>
            <Header headerText='About me' />
            <p>I am UX/UI Designer and Creative Developer.</p>
        </div>
    )
}