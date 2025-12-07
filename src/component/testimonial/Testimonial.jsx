import React, { useState } from "react";
import {TestimonialImageContext} from "./TestimonialImageContext"

function Testimonial({ children }) {
  const [hasImage, setHasImage] = useState(false)
  
  const testimonialClassName = hasImage 
    ? "testimonial-container" 
    : "testimonial-container-no-image"

  return (
    <TestimonialImageContext.Provider value={{hasImage,setHasImage}}>
      <div className={testimonialClassName}>
        {children}
      </div>
    </TestimonialImageContext.Provider>
    
  );
}

export default Testimonial;
