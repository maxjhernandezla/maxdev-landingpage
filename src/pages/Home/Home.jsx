import './Home.scss';
import AboutUs from '../AboutUs/AboutUs';
import Products from '../Products/Products';
import Contact from '../Contact/Contact';
import Footer from '../../components/Footer/Footer';
import NewNav from '../../components/Navbar/NewNav';
import { useRef } from 'react';

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
  return (
    <div className="home">
      <NewNav scrollToRef={scrollToRef} />
      <div className="homeContainer" ref={homeRef}>
        <video
          src="https://res.cloudinary.com/maxjhernandez/video/upload/v1704913058/front-video_f1qngl.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="content">
          <h1>MAXDEV</h1>
          <p>
            <i>Your Vision, Our Code.</i>
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
