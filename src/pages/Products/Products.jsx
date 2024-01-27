import './Products.scss';
import { getLanguageData } from '../../helpers/languageHelper';
const Products = () => {
  const data = getLanguageData();
  return (
    <div className="products">
      <div className="productsTitle">
        <h2>Products</h2>
      </div>
      <div className="productsContainer">
        {data.products.map((item, idx) => (
          <div className="product" key={idx}>
            <div className="imgContainer">
              <img
                src={item.img.src}
                alt={item.img.alt}
                className="productImg"
              />
            </div>
            <div className="description">
              <h3>{item.title}</h3>
              <ul>
                {item.description.map((listItem, idx) => (
                  <li key={idx}>{listItem}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
