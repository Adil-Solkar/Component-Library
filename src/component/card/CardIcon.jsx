import { IconContext } from "react-icons";
function CardIcon({children}) {
  return (
    <IconContext.Provider value={{color:"#fff", size:"3em",className:"card-icon"}}>
            {children}
    </IconContext.Provider>
  )
}

export default CardIcon