import { RiDoubleQuotesL } from "react-icons/ri";
import { IconContext } from "react-icons";

function Testimonials({children}) {

  return (
    <div className="testimonial-container"> 
        {children}
        <div className="testimonial">
                <IconContext.Provider value={{size:"2em",className:"double-quotes"}}>
                    <RiDoubleQuotesL />
                </IconContext.Provider>
            
            <p className="testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor 
                auctor adipiscing nunc urna, sit. 
            </p>

            <div className="testimonial-author-details">
                <strong>May Andersons</strong>
                <p>Workcation, CTO</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials