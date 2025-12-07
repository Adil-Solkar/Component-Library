import React from "react"
import {TestimonialImageContext} from "./TestimonialImageContext"

function TestimonialAuthor({children}) {
  const {hasImage} = React.useContext(TestimonialImageContext)
  return (
    <div className={hasImage ? "testimonial-author" : "testimonial-author-no-image"}>
        {children}      
    </div>
  )
}

export default TestimonialAuthor