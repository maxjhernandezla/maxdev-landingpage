import './Carousel.scss';

function MyCarousel({ data, scrollIntoView, scrollToRef }) {
  return (
    <div className="carousel">
      {data.map((item, index) => (
        <div key={index} className="item">
          <h1 className="title">{item.title}</h1>
          <p className="subtitle">{item.subtitle}</p>
          <button
            className="button"
            onClick={() => scrollIntoView(scrollToRef.scrollToRef.contactRef)}
          >
            {item.button}
          </button>
        </div>
      ))}
    </div>
  );
}

export default MyCarousel;
