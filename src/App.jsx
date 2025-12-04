import DisplayBadges from "./component/badge/DisplayBadges";
import Banner from "./component/banners/Banner";
import Card from "./component/card/Card";
import CardIcon from "./component/card/CardIcon";
import CardTitle from "./component/card/CardTitle";
import CardDescription from "./component/card/CardDescription";
import { HiOutlineCloudUpload } from "react-icons/hi";

function App() {
  return (
    <>
      <h1>Component Library</h1>

      {/* Badges */}
      <DisplayBadges />

      {/* Banners */}
      <h2>2. Banners</h2>
      <h3>Multi Line</h3>

      {/*    change bannerText to description and remove bannerType => type etc */}
      <div className="banner-multiline-container">
        <Banner
          bannerType="Success"
          bannerTitle="Congratulations!"
          bannerText="Lorem ipsum dolor"
        />

        <Banner
          bannerType="Warning"
          bannerTitle="Attention"
          bannerText="Lorem ipsum dolor sit"
        />

        <Banner
          bannerType="Error"
          bannerTitle="There is a problem with your application"
          bannerText="Lorem ipsum dolor sit"
        />

        <Banner
          bannerType="Neutral"
          bannerTitle="There is a problem with your application"
          bannerText="Lorem ipsum dolor sit"
        />
      </div>

      <h3>Single Line</h3>
      <div className="banner-singleline-container">
        <Banner bannerType="Success" bannerTitle="Congratulations!" />

        <Banner bannerType="Warning" bannerTitle="Attention" />

        <Banner
          bannerType="Error"
          bannerTitle="There is a problem with your application"
        />

        <Banner
          bannerType="Neutral"
          bannerTitle="There is a problem with your application"
        />
      </div>

      <h2>3. Card</h2>
      <Card>
        <CardIcon>
          <HiOutlineCloudUpload />
        </CardIcon>
        <CardTitle>
          <h2 className="card-title">Card Title</h2>
        </CardTitle>
        <CardDescription>
          <p className="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a
            tempore doloribus quia nulla animi minus fugiat explicabo ratione
            labore!
          </p>
        </CardDescription>
      </Card>
    </>
  );
}

export default App;
