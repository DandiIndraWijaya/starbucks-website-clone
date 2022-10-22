import React, { useEffect } from "react"
import './Sidebar.css'

const Sidebar = (props) => {
  const { isOpen } = props

  useEffect(() => {
    const sidebar = document.getElementById('sidebar')
    const sidebarItemsContainer = document.getElementById("sidebar-items-container")
    if(isOpen){
      sidebar.classList.add('show-sidebar')
      sidebarItemsContainer.classList.add('sidebar-open')
    }else {
      sidebar.classList.remove('show-sidebar')
      sidebarItemsContainer.classList.remove('sidebar-open')
    }
  }, [isOpen])
  
  return (
    <div id="sidebar" className="sidebar">
     <div id="sidebar-items-container" className="sidebar-items-container sidebar-open">
          d
        </div>
    </div>
  )
}

export default Sidebar