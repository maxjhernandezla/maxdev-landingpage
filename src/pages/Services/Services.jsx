import './Services.scss';
import { getLanguageData } from '../../helpers/languageHelper';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  const data = getLanguageData();
  return (
    <div className="services">
      <div className="servicesTitle">
        <h2>{data.services.title}</h2>
      </div>
      <div className="servicesContent">
        <div data-aos="fade-right" className="left">
          {data.services.servicesLeft.map((item, idx) => (
            <div className="service" key={idx}>
              <div className="imgContainer">
                <img
                  src={item.img.src}
                  alt={item.img.alt}
                  className="serviceImg"
                />
              </div>
              <div className="description">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div data-aos="fade-left" className="right">
          {data.services.servicesRight.map((item, idx) => (
            <div className="service" key={idx}>
              <div className="imgContainer">
                <img
                  src={item.img.src}
                  alt={item.img.alt}
                  className="serviceImg"
                />
              </div>
              <div className="description">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
