import { useState } from 'react';
import './NewNav.scss';
import { FaBars, FaTimes } from 'react-icons/fa';

const NewNav = ({ ...scrollToRef }) => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

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
          Home
        </a>
        <a
          className="link"
          onClick={() => scrollIntoView(scrollToRef.scrollToRef.aboutUsRef)}
        >
          About us
        </a>
        <a
          className="link"
          onClick={() => scrollIntoView(scrollToRef.scrollToRef.productsRef)}
        >
          Products
        </a>
        <a
          className="link"
          onClick={() => scrollIntoView(scrollToRef.scrollToRef.contactRef)}
        >
          Contact
        </a>
      </div>
      <div className="toggle-icon" onClick={handleToggle}>
        {toggle ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default NewNav;
