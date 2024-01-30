import { useState } from 'react';
import './Navbar.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import Language from '../Language/Language';
import { getLanguageData } from '../../helpers/languageHelper';
import { useLanguage } from '../../context/LanguageContext';
const NewNav = ({ ...scrollToRef }) => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const languageData = getLanguageData();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const scrollIntoView = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    });
    setToggle(false);
  };

  const handleNavbar = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', handleNavbar);

  return (
    <nav
      className={
        toggle ? 'navbar expanded' : `navbar${navbar ? ' active' : ''}`
      }
    >
      <div className="left">
        <img
          src="https://res.cloudinary.com/maxjhernandez/image/upload/v1704913023/logo_c9gzri.png"
          alt="logo"
          className="logo"
          onClick={() => scrollIntoView(scrollToRef.scrollToRef.homeRef)}
        />
      </div>
      <div className="right">
        <a
          className="link"
          onClick={() => scrollIntoView(scrollToRef.scrollToRef.homeRef)}
        >
          {languageData.navbar.item1}
        </a>
        <a
          className="link"
          onClick={() => scrollIntoView(scrollToRef.scrollToRef.productsRef)}
        >
          {languageData.navbar.item3}
        </a>
        <a
          className="link"
          onClick={() => scrollIntoView(scrollToRef.scrollToRef.aboutUsRef)}
        >
          {languageData.navbar.item2}
        </a>
        <a
          className="link"
          onClick={() => scrollIntoView(scrollToRef.scrollToRef.contactRef)}
        >
          {languageData.navbar.item4}
        </a>
        <div className="language">
          <Language />
        </div>
      </div>
      <div className="toggle-icon" onClick={handleToggle}>
        {toggle ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default NewNav;
