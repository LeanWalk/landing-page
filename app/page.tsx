import Carousel from "@/components/carousel";
import Hero from "./Hero/page";
import Navbar from "./navbar/page"
import Section from "./section/page";
import Side from "./side/page";
import Pricing from "./pricing/page";
import Call from "./call-to-action/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel />
      <Section />
      <Side />
      <Pricing />
      <Call />
      <Footer />
    </div>

  );
}
