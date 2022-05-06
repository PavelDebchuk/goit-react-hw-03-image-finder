import React from 'react';

const ImageGallery = ({ images, incrementPage, openModal }) => {
  return (
    <section>
      <ul className="gallery">
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <li
            className="gallery_item"
            key={id}
            onClick={e => openModal(largeImageURL)}
          >
            <img src={webformatURL} alt=""></img>
          </li>
        ))}
      </ul>
      {images.length > 10 && (
        <button type="button" onClick={incrementPage} className="Button">
          Load more
        </button>
      )}
    </section>
  );
};

export default ImageGallery;
