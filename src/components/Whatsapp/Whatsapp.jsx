import './Whatsapp.scss';

const Whatsapp = () => {
  const wppLink = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`;

  return (
    <div className="wppContainer">
      <a href={wppLink} target="_blank" rel="noopener noreferrer">
        <img
          src="https://res.cloudinary.com/maxjhernandez/image/upload/v1706633801/Pngtree_whatsapp_icon_whatsapp_logo_free_5990837_fikihv.png"
          alt="whatsapp"
          className="wppImg"
        />
      </a>
    </div>
  );
};

export default Whatsapp;
