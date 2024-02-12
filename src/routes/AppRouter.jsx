import AboutUs from '../pages/AboutUs/AboutUs';
import Services from '../pages/Services/Services';
import Contact from '../pages/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home/Home';
import { useRef } from 'react';
import Whatsapp from '../components/Whatsapp/Whatsapp';

const AppRouter = () => {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToRef = {
    homeRef,
    aboutUsRef,
    servicesRef,
    contactRef,
  };

  return (
    <div className="appRouter">
      <div className="home">
        <Navbar scrollToRef={scrollToRef} />
        <Whatsapp />
        <div className="homeContainer" ref={homeRef}>
          <Home scrollToRef={scrollToRef} />
        </div>
        <div className="servicesContainer" ref={servicesRef}>
          <Services />
        </div>
        <div className="aboutUsContainer" ref={aboutUsRef}>
          <AboutUs />
        </div>
        <div className="contactContainer" ref={contactRef}>
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AppRouter;
