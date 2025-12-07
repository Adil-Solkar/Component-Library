import React, { useEffect } from "react"
import logo from "../../assets/images/Mark.png"
import {TestimonialImageContext} from "./TestimonialImageContext"
function TestimonialImage({src,alt}) {

  const { hasImage,setHasImage } = React.useContext(TestimonialImageContext)
  
  useEffect(() => {
    if(src) {
      setHasImage(true)
    }
  }, [src,setHasImage])
  
  return (
    <div className={hasImage ? "testimonial-image-container" : "testimonial-no-image-container"}>
        {hasImage 
          ? <img src={src} alt={alt} />
          :<> 
            <img src={logo} alt="workcation logo"/>
            &nbsp;&nbsp;
            <span>
              Work<span className="logo-title-accent">cation</span>
            </span>
          </>
          }
    </div>
  )
}

export default TestimonialImage