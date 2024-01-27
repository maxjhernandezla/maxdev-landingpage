import { useContext } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Language.scss';

const Language = () => {
  const { switchLanguage } = useLanguage();
  return (
    <div className="languageContainer">
      <div className="spanish" onClick={switchLanguage}>
        <img
          src="https://res.cloudinary.com/maxjhernandez/image/upload/v1706365501/kisspng-flag-of-spain-iberian-peninsula-computer-icons-spa-free-spain-flag-svg-5ab1692640bc45.2855283815215762302652_olsjgp.png"
          alt="español"
          className="flag"
          onClick={() => switchLanguage('español')}
        />
      </div>
      <p>|</p>
      <div className="english" onClick={switchLanguage}>
        <img
          src="https://res.cloudinary.com/maxjhernandez/image/upload/v1706365357/kisspng-england-flag-of-the-united-kingdom-clip-art-cartoon-british-flag-5a85ded744dfd0.1215068115187227752821_ue6bli.png"
          alt="english"
          className="flag"
          onClick={() => switchLanguage('english')}
        />
      </div>
    </div>
  );
};

export default Language;
