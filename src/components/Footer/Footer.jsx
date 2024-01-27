import './Footer.scss';
import { getLanguageData } from '../../helpers/languageHelper';

const Footer = () => {
  const data = getLanguageData();
  return (
    <div className="footer">
      <p>{data.footer.copyright}</p>
    </div>
  );
};

export default Footer;
