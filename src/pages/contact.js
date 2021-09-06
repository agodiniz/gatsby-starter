import React from "react"

import { Link } from "gatsby"

import Header from "../components/header"

export default function Contact(){
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
        <Header headerText="Contact for me" />
        <p>Call for me now!</p>
        </div>
    )
}