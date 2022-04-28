import React from 'react';

const ImageGallery = ({ images, incrementPage }) => {
  const hits = images.hits;

  return (
    <section>
      <ul className="gallery">
        {hits &&
          hits.map(({ id, webformatURL }) => (
            <li key={id}>
              <img src={webformatURL} alt=""></img>
            </li>
          ))}
      </ul>
      {images.total > 12 && (
        <button type="button" onClick={incrementPage} className="Button">
          Load more
        </button>
      )}
    </section>
  );
};

export default ImageGallery;
