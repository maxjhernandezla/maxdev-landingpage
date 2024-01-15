import './Home.scss';
import AboutUs from '../AboutUs/AboutUs';
import Navbar from '../../components/Navbar/Navbar';
import Products from '../Products/Products';
import Contact from '../Contact/Contact';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
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
      <div className="aboutUsContainer">
        <AboutUs />
      </div>
      <div className="productsContainer">
        <Products />
      </div>

      <Contact />

      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
