import DisplayBadges from "./component/badge/DisplayBadges"
import Banner from "./component/banners/Banner"

function App() {

  return (
    <>
      <h1>Component Library</h1>

      {/* Badges */}
      <DisplayBadges />

      {/* Banners */}
      <h2>2. Banners</h2>
      <h3>Multi Line</h3>

      <Banner 
        bannerType="Success"
        bannerTitle= "Congratulations!"
        bannerText= "Lorem ipsum dolor sit"
      />

      <Banner 
        bannerType="Warning"
        bannerTitle= "Attention"
        bannerText= "Lorem ipsum dolor sit"
      />

      <Banner 
        bannerType="Error"
        bannerTitle= "There is a problem with your application"
        bannerText= "Lorem ipsum dolor sit"
      />

      <Banner 
        bannerType="Neutral"
        bannerTitle= "There is a problem with your application"
        bannerText= "Lorem ipsum dolor sit"
      />

      <h3>Single Line</h3>
      <Banner 
        bannerType="Success"
        bannerTitle= "Congratulations!"
      />

      <Banner 
        bannerType="Warning"
        bannerTitle= "Attention"
      />

      <Banner 
        bannerType="Error"
        bannerTitle= "There is a problem with your application"
      />

      <Banner 
        bannerType="Neutral"
        bannerTitle= "There is a problem with your application"
      />


    </>
  )
}

export default App
