import './Footer.scss';
import { getLanguageData } from '../../helpers/languageHelper';

const Footer = () => {
  const data = getLanguageData();
  const wppLink = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`;
  const igLink = 'https://www.instagram.com/maxdev.ar';
  const linkedInLink = 'https://www.linkedin.com/company/maxdev/about/';
  return (
    <div className="footer">
      <p>{data.footer.copyright}</p>
      <div className="social">
        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
          <img
            src="https://res.cloudinary.com/maxjhernandez/image/upload/v1709744003/Disen%CC%83o_sin_ti%CC%81tulo_37_u1tbzy.png"
            alt="linkedIn"
            className="Img"
          />
        </a>
        <a href={igLink} target="_blank" rel="noopener noreferrer">
          <img
            src="https://res.cloudinary.com/maxjhernandez/image/upload/v1709744003/Disen%CC%83o_sin_ti%CC%81tulo_35_qqklbi.png"
            alt="instagram"
            className="Img"
          />
        </a>
        <a href={wppLink} target="_blank" rel="noopener noreferrer">
          <img
            src="https://res.cloudinary.com/maxjhernandez/image/upload/v1709744962/Disen%CC%83o_sin_ti%CC%81tulo_38_dnrijy.png"
            alt="whatsapp"
            className="Img"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
