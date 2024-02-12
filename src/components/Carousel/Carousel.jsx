import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; // Asegúrate de importar los estilos CSS

function MyCarousel({ data }) {
  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={3000}
      buttonsDisabled
      dotsDisabled
    >
      {data.map((item, index) => (
        <div key={index} className="item">
          <h1 className="title">{item.title}</h1>
          <p className="subtitle">{item.subtitle}</p>
          <button
            className="button"
            // onClick={() => scrollIntoView(scrollToRef.scrollToRef.contactRef)}
          >
            {item.button}
          </button>
        </div>
      ))}
    </AliceCarousel>
  );
}

export default MyCarousel;
