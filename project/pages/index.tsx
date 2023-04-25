import Hero from "@/sections/Hero";
import About from "@/sections/About";
import { Footer, Navbar } from "../components";
import Explore from "@/sections/Explore";
import GetStarted from "@/sections/GetStarted";
import WhatsNew from "@/sections/WhatsNew";
import World from "@/sections/World";
import Insights from "@/sections/Insights";
import Feedback from "@/sections/Feedback";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </div>
  );
}
