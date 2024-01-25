import React, { useRef } from 'react';
import './AboutUs.scss';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="aboutUs">
      <div className={`aboutUsContainer ${inView ? 'visible' : ''}`} ref={ref}>
        <div className="left">
          <img
            src="https://res.cloudinary.com/maxjhernandez/image/upload/v1706216516/Disen%CC%83o_sin_ti%CC%81tulo_8_shpqdj.png"
            alt="img"
            className={`img ${inView ? 'show' : ''}`}
          />
        </div>
        <div className="right">
          <p className="topTitle">Purpose and strategic objectives</p>
          <h1>About us</h1>
          <div className="pContainer">
            <p>
              We specialize in empowering small and medium-sized businesses to
              thrive in the online world. Our mission is to enhance your digital
              presence and boost sales through innovative web development.{' '}
              <br />
              At MAXCODE, we understand the unique challenges faced by
              businesses of all sizes. From startups to mid-sized enterprises,
              we tailor our expertise to help you navigate the digital landscape
              seamlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
