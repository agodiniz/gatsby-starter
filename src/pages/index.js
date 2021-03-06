import React from "react"

import { Link } from "gatsby"

import Header from "../components/header"

export default function Home() {
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
    <Header headerText='Creative Developer' />
    <p>Welcome to my website</p>
  </div>
  )
}
