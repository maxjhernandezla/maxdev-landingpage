import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="left">
          <img
            src="https://res.cloudinary.com/maxjhernandez/image/upload/v1704913023/logo_c9gzri.png"
            alt="logo"
            className="logo"
          />
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
