import { useState, useEffect } from 'react';
import './Navbar.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import Language from '../Language/Language';
import { getLanguageData } from '../../helpers/languageHelper';
import { scrollToSection } from '../../helpers/scrollHelper';

const Navbar = ({ ...scrollToRef }) => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const data = getLanguageData();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const scrollIntoView = (sectionRef) => {
    scrollToSection(sectionRef);
    setToggle(false);
  };

  const handleNavbar = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavbar);

    return () => {
      window.removeEventListener('scroll', handleNavbar);
    };
  }, []);

  return (
    <nav
      className={
        toggle ? 'navbar expanded' : `navbar${navbar ? ' active' : ''}`
      }
    >
      <div className="left">
        <img
          src={data.logo.src}
          alt={data.logo.data}
          className="logo"
          onClick={() => scrollIntoView(scrollToRef.scrollToRef.homeRef)}
        />
      </div>
      <div className="right">
        <a
          className="link"
          onClick={() => scrollIntoView(scrollToRef.scrollToRef.homeRef)}
        >
          {data.navbar.item1}
        </a>
        <a
          className="link"
          onClick={() => scrollIntoView(scrollToRef.scrollToRef.servicesRef)}
        >
          {data.navbar.item3}
        </a>
        <a
          className="link"
          onClick={() => scrollIntoView(scrollToRef.scrollToRef.aboutUsRef)}
        >
          {data.navbar.item2}
        </a>
        <a
          className="link"
          onClick={() => scrollIntoView(scrollToRef.scrollToRef.contactRef)}
        >
          {data.navbar.item4}
        </a>
        <div className="language">
          <Language setToggle={setToggle} />
        </div>
      </div>
      <div className="toggle-icon" onClick={handleToggle}>
        {toggle ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
