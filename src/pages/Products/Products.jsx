import './Products.scss';

const Products = () => {
  return (
    <div className="products">
      <div className="productsTitle">
        <h2>Our Products</h2>
      </div>
      <div className="productsContainer">
        <div className="product">
          <div className="imgContainer">
            <img
              src="https://res.cloudinary.com/maxjhernandez/image/upload/v1704914262/computer-154114_1920_jrv59r.png"
              alt="landing-page"
              className="productImg"
            />
          </div>
          <div className="description">
            <h3>Landing Page</h3>
            <ul>
              <li>Website created in HTML, CSS, and JS</li>
              <li>Optimized for all types of devices</li>
              <li>1 contact form</li>
              <li>Links to social media</li>
              <li>WhatsApp button</li>
              <li>Hosting for 1 year</li>
              <li>Domain .com.ar for 1 year</li>
              <li>SSL certificate for 1 year</li>
              <li>No web maintenance required</li>
            </ul>
          </div>
        </div>
        <div className="product">
          <div className="imgContainer">
            <img
              src="https://res.cloudinary.com/maxjhernandez/image/upload/v1704919702/Disen%CC%83o_sin_ti%CC%81tulo_4_skwg00.png"
              alt="corporate-website"
              className="productImg"
            />
          </div>
          <div className="description">
            <h3>Corporate Website</h3>
            <ul>
              <li>Website created in HTML, CSS, and JS</li>
              <li>Optimized for all types of devices</li>
              <li>1 contact form</li>
              <li>Links to social media</li>
              <li>WhatsApp button</li>
              <li>Hosting for 1 year</li>
              <li>Domain .com.ar for 1 year</li>
              <li>SSL certificate for 1 year</li>
              <li>No web maintenance required</li>
            </ul>
          </div>
        </div>
        <div className="product">
          <div className="imgContainer">
            <img
              src="https://res.cloudinary.com/maxjhernandez/image/upload/v1704919706/Disen%CC%83o_sin_ti%CC%81tulo_5_kfwcm9.png"
              alt="landing-page"
              className="productImg"
            />
          </div>

          <div className="description">
            <h3>E-commerce</h3>
            <ul>
              <li>Website created in HTML, CSS, and JS</li>
              <li>Optimized for all types of devices</li>
              <li>1 contact form</li>
              <li>Links to social media</li>
              <li>WhatsApp button</li>
              <li>Hosting for 1 year</li>
              <li>Domain .com.ar for 1 year</li>
              <li>SSL certificate for 1 year</li>
              <li>No web maintenance required</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
