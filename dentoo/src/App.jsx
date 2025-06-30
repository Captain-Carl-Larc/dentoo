//imports
import "./App.css";
import Hero from "./components/hero";
import Features from "./components/features";
import Benefits from "./components/benefits";
import SocialProof from "./components/socialProof";
import Faqs from "./components/faqs";
import Banner from "./components/banner";

function App() {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <SocialProof />
      <Faqs />
      <Banner
        title="Your Bright, Confident Smile Awaits!"
        description="Take the first step towards a comfortable experience and a stunning smile. Connect with our team to discuss your needs and start your journey to optimal oral health and lasting confidence."
        buttonText="Schedule Your Free Consultation"
      />
    </>
  );
}

export default App;
