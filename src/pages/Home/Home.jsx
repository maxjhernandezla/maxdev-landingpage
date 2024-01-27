import './Home.scss';
import AboutUs from '../AboutUs/AboutUs';
import Products from '../Products/Products';
import Contact from '../Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { useRef } from 'react';
import { getLanguageData } from '../../helpers/languageHelper';

const Home = () => {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToRef = {
    homeRef,
    aboutUsRef,
    productsRef,
    contactRef,
  };
  const languageData = getLanguageData();

  return (
    <div className="home">
      <Navbar scrollToRef={scrollToRef} />
      <div className="homeContainer" ref={homeRef}>
        <video
          src="https://res.cloudinary.com/maxjhernandez/video/upload/v1704913058/front-video_f1qngl.mp4"
          autoPlay
          loop
          muted
          controls={false}
        ></video>
        <div className="content">
          <h1>{languageData.homePage.title}</h1>
          <p>
            <i>{languageData.homePage.subtitle}</i>
          </p>
        </div>
      </div>
      <div className="aboutUsContainer" ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div className="productsContainer" ref={productsRef}>
        <Products />
      </div>
      <div className="contactContainer" ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
