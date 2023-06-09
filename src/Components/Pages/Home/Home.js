import React from "react";
import Text from "./Text/Text";
import Bannar from "./Bannar/Bannar";
import Cources from "./Cources/Cources";
import Premium from "./Premium /Premium";
import Contact from "./Contact/Contact";
import FAQs from "./FAQs/FAQs";
import Features from "./Features/Features";
import Subscribe from "./Subscribe/Subscribe";
import Slider from "./Slider/Slider";
import About from "./About /About";


const Home = () => {
  
  return (
    <div>
      <Text/>
      <Bannar/>
      <Cources/>
      <Features/>
      <Premium/>
      <Slider/>
      <About/>
      <FAQs/>
      <Subscribe/>
      <Contact/>
    </div>
  );
};

export default Home;
