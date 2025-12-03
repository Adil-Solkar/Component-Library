import { IconContext } from "react-icons";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";

function BannerIcon({action}) {
    
switch (action) {
    case 'success':
      return ( 
        <span>
            <IconContext.Provider value={{color:"#0FFF50"}}>
                <FaCheckCircle />
            </IconContext.Provider>
        </span>)
    
    case 'warning':
      return ( 
        <span>
            <IconContext.Provider value={{color:"#FBBF24"}}>
                <FaExclamationTriangle />
            </IconContext.Provider>
        </span>)

    case 'error':
      return ( 
        <span>
            <IconContext.Provider value={{color:"#F87171"}}>
                <MdCancel />
            </IconContext.Provider>
        </span>)

    case 'neutral':
      return ( 
        <span>
            <IconContext.Provider value={{color:"#60A5FA"}}>
                <FaInfoCircle />
            </IconContext.Provider>
        </span>)
    // ... other cases
    default:
      return null;
  }
}

export default BannerIcon


/* 
*/