import React, { useState, useEffect } from 'react';
import './AboutUs.scss';
import { useInView } from 'react-intersection-observer';
import { getLanguageData } from '../../helpers/languageHelper';
import CardFlip from '../../components/CardFlip/CardFlip';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  const data = getLanguageData();
  const [showTeam, setShowTeam] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const handleShowTeam = () => {
    setShowTeam(!showTeam);
  };

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="aboutUs">
      <div
        className={`aboutUsContent ${showTeam ? 'hidden' : ''} ${
          inView ? 'visible' : ''
        }`}
        ref={ref}
      >
        <div className="left">
          <h2>{data.aboutUs.title}</h2>
          <p data-aos="fade-right">{data.aboutUs.text}</p>
          {/* <p>{data.aboutUs.text}</p> */}
        </div>
        {/* <div className="right"> */}
        <div className="right" data-aos="fade-left">
          <img
            src="https://res.cloudinary.com/maxjhernandez/image/upload/v1706808586/Disen%CC%83o_sin_ti%CC%81tulo_17_jnxnjs.png"
            alt=""
          />
          <p onTouchStart={handleShowTeam}>Click to see de team</p>
        </div>
      </div>
      <div className={showTeam ? 'team-expanded' : 'team'}>
        <CardFlip
          team={data.aboutUs.team}
          showTeam={showTeam}
          setShowTeam={setShowTeam}
        />
      </div>
    </div>
  );
};

export default AboutUs;
