/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import './Navbar.css'
import { useMediaQuery } from 'react-responsive'
import Sidebar from "../Sidebar"
import Button from "../Button"

const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 790px)' })
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebarButton = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
    <div id="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo-container">
            <a href="">
              <img className="starbucks-logo" src="https://upload.wikimedia.org/wikipedia/id/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt="" />
            </a>
          </div>
          {
            !isTabletOrMobile && (
              <>
                <div className="navbar-link">
                  MENU
                </div>
                <div className="navbar-link">
                  REWARDS
                </div>
                <div className="navbar-link">
                  GIFT CARDS
                </div>
              </>
            )
          }
        </div>
            <div className="navbar-right">
              {
                !isTabletOrMobile ? <>
                  <div className="find-store">
                    <svg aria-hidden="true" className="maps-icon" focusable="false" preserveAspectRatio="xMidYMid meet" style={{width:'28px',height:'28px',overflow:'visible',fill:'currentColor'}} viewBox="0 0 24 24"><path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path></svg> <span className="text">Find a store</span>
                  </div>
                  <div className="sign-in">
                    Sign in
                  </div>
                  <div className="join-now">
                    Join now
                  </div>
                </>:
                <Button 
                  isSidebarOpen={isSidebarOpen}
                  toggleSidebarButton={toggleSidebarButton}
                  type="sidebar" 
                />
              }
            </div>
      </div>
    </div>
    <Sidebar isOpen={isSidebarOpen} />
    </>
  )
}

export default Navbar
