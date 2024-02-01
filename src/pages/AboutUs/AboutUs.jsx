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
      <div className={`aboutUsContent ${inView ? 'visible' : ''}`} ref={ref}>
        <div className="left">
          <h2>{data.aboutUs.title}</h2>
          <p>{data.aboutUs.text}</p>
        </div>
        <div className="right">
          <img
            src="https://res.cloudinary.com/maxjhernandez/image/upload/v1706808586/Disen%CC%83o_sin_ti%CC%81tulo_17_jnxnjs.png"
            alt=""
          />
        </div>
      </div>
      <div className="team">
        {data.aboutUs.team.map((member, idx) => (
          <div className="member" key={idx}>
            <img src={member.src} alt={member.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
