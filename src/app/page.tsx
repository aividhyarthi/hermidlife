import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmotionalTruth from "@/components/EmotionalTruth";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import TrustStats from "@/components/TrustStats";
import B2B from "@/components/B2B";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EmotionalTruth />
        <Services />
        <WhyUs />
        <HowItWorks />
        <TrustStats />
        <B2B />
        <Events />
        <Team />
        <Banner />
      </main>
      <Footer />
    </>
  );
}
