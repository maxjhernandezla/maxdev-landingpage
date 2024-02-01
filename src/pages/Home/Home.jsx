import './Home.scss';
import { getLanguageData } from '../../helpers/languageHelper';

const Home = () => {
  const data = getLanguageData();
  return (
    <div className="home">
      <div className="container">
        <div className="homeContent">
          <h1 className="title">{data.homePage.title}</h1>
          <p className="subtitle">{data.homePage.subtitle}</p>
          <button className="button">{data.homePage.button}</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
