import Hero from "./../components/Hero";
import LandingCards from "./../components/LandingCards";
import card1 from "../assets/IMG-20231230-WA0006.jpg";
import card2 from "../assets/IMG-20231230-WA0004.jpg";
import Info from "../components/Info";
import { builderBenefits, cloudJourney } from "../data/InfoCardsData";
import Spacer from "../components/Spacer";
import Title from "../components/Title";
const Landing = () => {
  return (
    <>
      <Hero />
      <div className="flex items-center justify-center">
        <div className="container">
          <Spacer size={4} />

          <LandingCards
            img={card1}
            title="Listen, Rose. You're going to get out"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam quos, mollitia saepe, delectus voluptatum ratione odio animi eaque similique dolore earum soluta voluptas tempore facere illum eveniet natus! Doloribus laboriosam, dolores et dolorum fugiat officia corporis. Magnam eius esse quo saepe architecto perferendis nam impedit enim facere"
            link="the quick brown fox jumps over the lazy dog"
          />

          <Spacer size={3} />

          <Title
            title="Benefits to activate the builder in you"
            subTitle="From simple tools and predictable pricing to support designed for growing businesses, DigitalOcean's cloud is built to serve the unique needs of startups and SMBs."
          />

          <Spacer size={2} />

          <Info contents={builderBenefits} />

          <Spacer size={3} />

          <LandingCards
            img={card2}
            title="Listen, Rose. You're going to get out"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam quos, mollitia saepe, delectus voluptatum ratione odio animi eaque similique dolore earum soluta voluptas tempore facere illum eveniet natus! Doloribus laboriosam, dolores et dolorum fugiat officia corporis. Magnam eius esse quo saepe architecto perferendis nam impedit enim facere"
            link="the quick brown fox jumps over the lazy dog"
          />

          <Spacer size={3} />

          <Title
            title="A cloud for your entire journey"
            subTitle="Lead Urban's suite of products is designed to be with you on every step of your journey, whether you want to do it yourself or get help from the experts."
          />

          <Spacer size={2} />

          <Info contents={cloudJourney} />

          <Spacer size={3} />
        </div>
      </div>
    </>
  );
};
export default Landing;
