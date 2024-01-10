import './Navbar.scss';
import logo from '../../assets/logo.png';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="left">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="right">
          <a className="link">Home</a>
          <a className="link">About us</a>
          <a className="link">Products</a>
          <a className="link">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
