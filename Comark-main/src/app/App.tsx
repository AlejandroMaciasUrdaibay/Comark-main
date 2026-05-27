import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { HowItWorks } from "./components/HowItWorks";
import { Services } from "./components/Services";
import { Pricing } from "./components/Pricing";
import { About } from "./components/About";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Services />
      <Pricing />
      <About />
      <FinalCTA />
      <Footer />
    </div>
  );
}