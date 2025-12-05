import { Children } from "react"

function TestimonialImage({children}) {
    console.log(children.props.src === "")
  return (
    <div className="testimonial-image-container">
        {children}
    </div>
  )
}

export default TestimonialImage