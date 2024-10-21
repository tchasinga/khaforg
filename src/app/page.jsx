
import Aboutus from "./Components/Pages/Aboutus";
import Hero from "./Components/Pages/Hero";
import OurServices from "./Components/Pages/OurServices";
import Ourpartners from "./Components/Pages/Ourpartners"
import Awardservices from "./Components/Pages/Awardservices"


export default function Home() {
  return (
    <div className="">
      
      <Hero/> 
      <OurServices />
      <Aboutus />
      <Ourpartners />
      <Awardservices/>
    </div>
  );
}
