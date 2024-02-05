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
      console.log('Se hizo scroll');
    } else {
      // Puedes realizar acciones adicionales cuando el desplazamiento sea menor a 100
      console.log('Desplazamiento menor a 100');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(scrollToRef);
  return (
    <div className="home">
      <div className="container">
        <div className="homeContent">
          <h1 className="title">{data.homePage.title}</h1>
          <p className="subtitle">{data.homePage.subtitle}</p>
          <button
            className="button"
            onClick={() => scrollIntoView(scrollToRef.scrollToRef.contactRef)}
          >
            {data.homePage.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
