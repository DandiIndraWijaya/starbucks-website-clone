import React, { useEffect } from "react"
import Chevron from "../../icons/chevron"
import './Sidebar.css'

const Sidebar = (props) => {
  const { isOpen, toggleSidebarButton } = props

  useEffect(() => {
    const sidebar = document.getElementById('sidebar')
    const sidebarItemsContainer = document.getElementById("sidebar-items")
    if(isOpen){
      window.scrollTo(0, 0);
      document.body.style.overflowY = 'hidden'
      sidebar.classList.add('show-sidebar')
      sidebarItemsContainer.classList.add('sidebar-open')
    }else {
      document.body.style.overflowY = 'scroll'
      sidebar.classList.remove('show-sidebar')
      sidebarItemsContainer.classList.remove('sidebar-open')
    }
  }, [isOpen])

  const onClickBlankSidebar = () => {
    toggleSidebarButton()
    const sidebar = document.getElementById('sidebar')
    const sidebarItemsContainer = document.getElementById("sidebar-items")
    // document.body.style.overflow = 'scroll'
    sidebar.classList.remove('show-sidebar')
    sidebarItemsContainer.classList.remove('sidebar-open')
  }
  
  return (
    <div id="sidebar" className="sidebar">
      <div id="blank-sidebar" onClick={onClickBlankSidebar}></div>
      <div id="sidebar-items" className="sidebar-items sidebar-open">
        <div className="sidebar-items-container">
          <div className="sidebar-link">
            <span className="sidebar-link-title">Menu</span> <Chevron style={{ width: '32px', height: '32px', transform: 'rotate(-90deg)' }} />
          </div>
          <div className="sidebar-link">
            Rewards
          </div>
          <div className="sidebar-link">
            Gift Cards
          </div>
          <div className="divider"></div>
          <div className="sidebar-sign-button-container">
              <button className="sign-in sidebar-sign-button">
                Sign in
              </button>
              <button className="join-now sidebar-join-button">
                Join now
              </button>
          </div>
          <div className="find-store">
            <svg aria-hidden="true" className="maps-icon" focusable="false" preserveAspectRatio="xMidYMid meet" style={{width:'24px',height:'24px',overflow:'visible',fill:'currentColor'}} viewBox="0 0 24 24"><path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path></svg> <span className="text">Find a store</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar