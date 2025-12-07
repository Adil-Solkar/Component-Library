import React from "react"
import {TestimonialImageContext} from "./TestimonialImageContext"

function TestimonialDetails({children}) {
  const {hasImage} = React.useContext(TestimonialImageContext)
  return (
    <div className={hasImage ? "testimonial" : "testimonial-details-no-image"}>
        {children}
    </div>
  )
}

export default TestimonialDetails