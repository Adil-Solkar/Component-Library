import React from "react";
import {TestimonialImageContext} from "./TestimonialImageContext"
import TestimonialImage from "./TestimonialImage";

// helper function to check if image src is present or not
function hasImageSource(children) {
  let hasImage = false

  React.Children.forEach(children,child => {
    if(child && child.type === TestimonialImage && child.props.src){ 
      hasImage = true
    }  
  })
  return hasImage
}

function Testimonial({ children }) {
  const hasImage = React.useMemo(() => hasImageSource(children),[children])

  const testimonialClassName = hasImage 
    ? "testimonial-container" 
    : "testimonial-container-no-image"

  return (
    <TestimonialImageContext.Provider value={{ hasImage }}>
      <div className={testimonialClassName}>
        {children}
      </div>
    </TestimonialImageContext.Provider>
  );
}

export default Testimonial;
