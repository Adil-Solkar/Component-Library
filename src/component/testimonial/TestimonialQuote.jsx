import React from "react"
import { RiDoubleQuotesL } from "react-icons/ri";
import { IconContext } from "react-icons";
import {TestimonialImageContext} from "./TestimonialImageContext"

function TestimonialQuote({children}) {
  const {hasImage} = React.useContext(TestimonialImageContext)
  return (
    <>
        {
          hasImage && 
          <IconContext.Provider value={{ size: "2em", className: "double-quotes" }}>
            <RiDoubleQuotesL />
          </IconContext.Provider>
        }
        <p className={hasImage?"testimonial-text":"testimonial-text-no-image"}>
          {hasImage ? children : `"${children}"` }
        </p>
    </>
  )
}

export default TestimonialQuote