import './Home.scss';
import { getLanguageData } from '../../helpers/languageHelper';
import { scrollToSection } from '../../helpers/scrollHelper';
import { useEffect } from 'react';
const Home = ({ ...scrollToRef }) => {
  const data = getLanguageData();
  const scrollIntoView = (sectionRef) => {
    scrollToSection(sectionRef);
  };
  const handleScroll = () => {
    if (window.scrollY >= 100) {
      // Realiza alguna acción o cambia el estado aquí
      // Por ejemplo, setNavbar(true) si quieres cambiar el estado navbar
    } else {
      // Puedes realizar acciones adicionales cuando el desplazamiento sea menor a 100
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="homeContent">
          {data.homePage.carousel.map((item, idx) => (
            <div className="item" key={idx}>
              <h1 className="title">{item.title}</h1>
              <p className="subtitle">{item.subtitle}</p>
              <button
                className="button"
                onClick={() =>
                  scrollIntoView(scrollToRef.scrollToRef.contactRef)
                }
              >
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
