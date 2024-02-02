import React from 'react';
import './AboutUs.scss';
import { useInView } from 'react-intersection-observer';
import { getLanguageData } from '../../helpers/languageHelper';
import CardFlip from '../../components/CardFlip/CardFlip';

const AboutUs = () => {
  const data = getLanguageData();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  console.log(data.aboutUs.team);
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
        <CardFlip team={data.aboutUs.team} />
      </div>
    </div>
  );
};

export default AboutUs;
