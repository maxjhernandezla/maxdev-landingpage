import './Home.scss';
import video from '../../assets/front-video.mp4';
import AboutUs from '../AboutUs/AboutUs';
import Navbar from '../../components/Navbar/Navbar';
import Products from '../Products/Products';
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <video src={video} autoPlay loop muted></video>
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
    </div>
  );
};

export default Home;
