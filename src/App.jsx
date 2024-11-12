import AssessmentsSection from "./components/AssessmentsSection";
import AssociationSection from "./components/AssociationSection";
import Features from "./components/Features";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <InfoSection />
      <AssessmentsSection />
      <AssociationSection />
      <TestimonialSection />
      <Footer />
    </>
  );
}

export default App;
