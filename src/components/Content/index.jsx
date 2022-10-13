import React from "react"
import "./Content.css"

const Content = (props) => {
  const { 
    image, 
    type, 
    title, 
    description,
    buttonText
  } = props

  if(type === 1){
    return (
      <div className="content-container-1">
        <div className="content-image">
          <img src={image} alt="" />
        </div>
        <div className="content-text">
            <div className="content-title text-old-green">{title}</div>
            <div className="content-description text-old-green">{description}</div>
            <button className="button-content">
              {buttonText}
            </button>
          </div>
      </div>
    )
  }

  if(type === 2){
    return (
      <div className="content-container-1">
        <div className="content-text">
            <div className="content-title-zoom text-old-green">{title}</div>
            <div className="content-description-zoom text-old-green">{description}</div>
            <button className="button-content">
              {buttonText}
            </button>
          </div>
          <div className="content-image">
            <img src={image} alt="" />
          </div>
      </div>
    )
  }

  if(type === 3){
    return (
      <div className="content-container-2">
         <div className="content-image">
            <img src={image} alt="" />
          </div>
        <div className="content-text">
            <div className="content-title-zoom text-white">{title}</div>
            <div className="content-description-zoom text-white">{description}</div>
            <button className="button-content-2">
              {buttonText}
            </button>
          </div>
      </div>
    )
  }

  if(type === 4){
    return (
      <div className="content-container-2">
        <div className="content-text">
          <div className="content-title-zoom text-white">{title}</div>
          <div className="content-description-zoom text-white">{description}</div>
          <button className="button-content-2">
            {buttonText}
          </button>
        </div>
        <div className="content-image">
          <img src={image} alt="" />
        </div>
      </div>
    )
  }

  if(type === 5){
    return (
      <div className="content-container-2">
        <div className="content-image">
            <img src={image} alt="" />
        </div>
        <div className="content-text">
            <div className="content-title text-white">{title}</div>
            <div className="content-description text-white">{description}</div>
            <button className="button-content-2">
              {buttonText}
            </button>
          </div>
      </div>
    )
  }

  if(type === 6){
    return (
      <div className="content-container-1">
        <div className="content-text">
          <div className="content-title text-old-green">{title}</div>
          <div className="content-description text-old-green">{description}</div>
          <button className="button-content">
            {buttonText}
          </button>
        </div>
        <div className="content-image">
          <img src={image} alt="" />
        </div>
      </div>
    )
  }


}

export default Content