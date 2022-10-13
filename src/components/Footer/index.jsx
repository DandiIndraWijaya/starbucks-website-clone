import React from "react"
import "./Footer.css"
import { services, socialMedia } from "./footerData"

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-services">
      {
        services.map((service, key) => {
          return (
            <div className="footer-service">
              <div className="footer-service-title">
                {service.title}
              </div>
              {
                service.items.map((item, key) => {
                  return (
                    <div className="footer-service-item text-grey">
                      {item}
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
      </div>
      <div className="divider"></div>
      <div className="footer-social-media">
        {
          socialMedia.map((media, key) => {
            return (
              <div className="footer-social-media-item">
                <div className="footer-social-media-item-bg">
                {media.icon}
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer-terms">
        <div className="footer-terms-item">
          Privacy Policy
        </div>
        <div className="footer-terms-divider"></div>
        <div className="footer-terms-item">
          Terms of Use
        </div>
        <div className="footer-terms-divider"></div>
        <div className="footer-terms-item">
          CA Supply Chain Act
        </div>
        <div className="footer-terms-divider"></div>
        <div className="footer-terms-item">
          Cookie Preferences
        </div>
      </div>
      <div className="footer-copyright text-grey">
        © 2022 Starbucks Coffee Company. All rights reserved.
      </div>
    </div>
  )
}

export default Footer