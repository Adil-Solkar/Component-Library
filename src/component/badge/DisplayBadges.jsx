import Badges from "./Badge"
import {squareBadgesData, pillBadgesData} from './badgesData'

function DisplayBadges() {

    const squareBadgeComponent = (squareBadgesData && squareBadgesData.length) ? squareBadgesData.map((badge,index) => {
        return <Badges key={index} {...badge}/>
    }) : null

    const pillBadgeComponent = (pillBadgesData && pillBadgesData.length) ? pillBadgesData.map((badge,index) => {
        return <Badges key={index} {...badge}/>
    }) : null

  return (
    <>
        <h2>1. Badges</h2>
        <h3>Square</h3>
        <div className="badge-square-container">
            {squareBadgeComponent}
        </div>
        <h3>Pill</h3>
        <div className="badge-pill-container">
            {pillBadgeComponent}
        </div>
    </>
  )
}

export default DisplayBadges



