import './Services.scss';
import { getLanguageData } from '../../helpers/languageHelper';
const Services = () => {
  const data = getLanguageData();
  return (
    <div className="services">
      <div className="servicesTitle">
        <h2>{data.services.title}</h2>
      </div>
      <div className="servicesContent">
        <div className="left">
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
        <div className="right">
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
