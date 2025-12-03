import BannerIcon from "./BannerIcon"

function Banner({ bannerType="default",bannerTitle="Enter banner title",bannerText }) {
    const action = bannerType ? bannerType.toLowerCase() : null
  return (
    <>
        <div className={`banner-container banner-${action}`}
            role="banner">
            {/* <span>icon</span> */}
            <BannerIcon action={action}/>
            <div className="banner-content">
                <p>{bannerTitle}</p>
                {bannerText && <p className="banner-text">{bannerText}</p>}
            </div>
        </div>
    </>
  )
}

export default Banner