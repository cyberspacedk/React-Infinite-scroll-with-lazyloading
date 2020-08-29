import React from 'react';

const ImageCard = ({author, url}) => (
  <div className="card">
    <div className="card-body ">
      <img
        alt={author}
        data-src={url}
        className="card-img-top"
        src={'https://picsum.photos/id/870/300/300?grayscale&blur=2'}
      />
    </div>
    <div className="card-footer">
      <p className="card-text text-center text-capitalize text-primary">Shot by: {author}</p>
    </div>
  </div>
)

export default ImageCard;