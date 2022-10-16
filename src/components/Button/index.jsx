import React, { useState } from "react"
import './Button.css'

const Button = (props) => {
  const { type } = props
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebarButton = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  if(type === 'sidebar'){
    return (
      <button onClick={toggleSidebarButton} id="sidebar-button">
        <div className="sidebar-button-icon-bg"></div>
        <div id="nav-icon" className={isSidebarOpen ? 'open' : ''}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    )
  }

  return <button></button>
}

export default Button

