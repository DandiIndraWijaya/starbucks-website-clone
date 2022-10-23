import React, { useEffect } from "react"
import "./Footer.css"
import { services, socialMedia } from "./footerData"
import { useMediaQuery } from 'react-responsive'
import Chevron from "../../icons/chevron"

const Footer = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' })

  const onClickService = (index) => {
    if(isTabletOrMobile){
      const chevron =  document.getElementsByClassName('footer-chevron')
      const serviceItemContainer = document.getElementsByClassName('footer-service-item-container')
      if(serviceItemContainer[index].style.height === '0px'){
        serviceItemContainer[index].style.height = serviceItemContainer[index].scrollHeight + 'px'
        chevron[index].style.transform = 'rotate(180deg)'
      }else {
        serviceItemContainer[index].style.height =  0
        chevron[index].style.transform = 'unset'
      }
    }
  }

  useEffect(() => {
   if(isTabletOrMobile){
    const serviceItemContainer = document.getElementsByClassName('footer-service-item-container')
    for(let i = 0; i < serviceItemContainer.length; i += 1){
      serviceItemContainer[i].style.height =  0
    }
   }
  })

  return (
    <div id="footer">
      <div className="footer-services">
      {
        services.map((service, key) => {
          return (
            <div className="footer-service">
              <div onClick={() => onClickService(key)} className="footer-service-title-container">
                <div className="footer-service-title">{service.title}</div>
                {
                  isTabletOrMobile && <Chevron className="footer-chevron" style={{ width: 32, height: 32}} />
                }
              </div>
              <div className="footer-service-item-container">
             <div className="footer-service-item-container-absolute">
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
              </div>
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