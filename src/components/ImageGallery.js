import React from 'react';

const ImageGallery = ({ images, incrementPage, openModal }) => {
  const hits = images.hits;

  return (
    <section>
      <ul className="gallery">
        {hits &&
          hits.map(({ id, webformatURL, largeImageURL }) => (
            <li
              className="gallery_item"
              key={id}
              onClick={e => openModal(e, largeImageURL)}
            >
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
