import './AboutUs.scss';
const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUsContainer">
        <div className="left">
          <img
            src="https://res.cloudinary.com/maxjhernandez/image/upload/v1704913022/machine_nwumiz.png"
            alt="img"
            className="img"
          />
        </div>
        <div className="right">
          <h1>About us</h1>
          <div className="pContainer">
            <p>
              <i>
                We specialize in empowering small and medium-sized businesses to
                thrive in the online world. Our mission is to enhance your
                digital presence and boost sales through innovative web
                development. <br />
                At MAXCODE, we understand the unique challenges faced by
                businesses of all sizes. From startups to mid-sized enterprises,
                we tailor our expertise to help you navigate the digital
                landscape seamlessly.
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
