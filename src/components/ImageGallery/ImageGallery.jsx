import { ImageGalleryItem } from 'components/ImageGalleryItem/Loader/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ gallary, onClick }) => {
  return (
    <ul onClick={onClick}>
      {gallary.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li key={id}>
          <ImageGalleryItem
            url={webformatURL}
            tags={tags}
            modalUrl={largeImageURL}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  gallary: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
