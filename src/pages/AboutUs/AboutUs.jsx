import React, { useRef } from 'react';
import './AboutUs.scss';
import { useInView } from 'react-intersection-observer';
import { getLanguageData } from '../../helpers/languageHelper';
const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const data = getLanguageData();
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
          <p className="topTitle">{data.aboutUs.topTitle}</p>
          <h1>{data.aboutUs.title}</h1>
          <div className="pContainer">
            <p>
              {data.aboutUs.text1}
              <br />
              {data.aboutUs.text2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
